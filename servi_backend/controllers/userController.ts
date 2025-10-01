// 📁 controllers/userController.ts
import { Request, Response } from "express";
import db from "../db"; // tu conexión MySQL con mysql2/promise
import bcrypt from "bcryptjs";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

// Interfaz de usuario
interface User extends RowDataPacket {
  user_id: number;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  sexo?: string;
  edad?: number;
  peso?: number;
  altura?: number;
  actividad?: string;
  objetivo?: string;
  deficit?: string;
  ganarNivel?: string;
  mantenerNivel?: string;
  creadoEn?: Date;
}

// ---------------- LOGIN ----------------
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Faltan email o contraseña" });

  try {
    const [rows] = await db.query<User[] & RowDataPacket[]>(
      "SELECT * FROM usuarios WHERE correo = ?",
      [email]
    );

    if (rows.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });

    const user = rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return res.status(401).json({ error: "Contraseña incorrecta" });

    return res.json({
      message: "Login exitoso",
      user: {
        user_id: user.user_id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        sexo: user.sexo,
        edad: user.edad,
        peso: user.peso,
        altura: user.altura,
        actividad: user.actividad,
        objetivo: user.objetivo,
        deficit: user.deficit,
        ganarNivel: user.ganarNivel,
        mantenerNivel: user.mantenerNivel,
      },
    });
  } catch (error) {
    console.error("Error en loginUser:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};


// ---------------- ACTUALIZAR USUARIO ----------------
export const updateUser = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const {
    nombre,
    apellido,
    email,
    password,
    sexo,
    edad,
    peso,
    altura,
    actividad,
    objetivo,
    deficit,
    ganarNivel,
    mantenerNivel,
  } = req.body;

  try {
    let hashedPassword: string | undefined;
    if (password) hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      UPDATE usuarios SET
        nombre = ?,
        apellido = ?,
        correo = ?,
        ${hashedPassword ? "password = ?," : ""}
        sexo = ?,
        edad = ?,
        peso = ?,
        altura = ?,
        actividad = ?,
        objetivo = ?,
        deficit = ?,
        ganarNivel = ?,
        mantenerNivel = ?
      WHERE user_id = ?
    `;

    const params = hashedPassword
      ? [nombre, apellido, email, hashedPassword, sexo, edad, peso, altura, actividad, objetivo, deficit, ganarNivel, mantenerNivel, user_id]
      : [nombre, apellido, email, sexo, edad, peso, altura, actividad, objetivo, deficit, ganarNivel, mantenerNivel, user_id];

    await db.query(query, params);

    return res.json({ message: "Usuario actualizado con éxito" });
  } catch (error) {
    console.error("Error en updateUser:", error);
    return res.status(500).json({ error: "Error al actualizar usuario" });
  }
};
