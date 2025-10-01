// 📁 controllers/LoginController.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db"; // asegurate que exporta correctamente el pool
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "tu_secreto_super_seguro";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Correo y contraseña son obligatorios" });
    }

    // 🔹 Buscamos al usuario por el campo 'correo' en la DB
    const [rows]: any = await db.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [email]
    );
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }

    // 🔹 Comparamos contraseña con bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }

    // 🔹 Generamos JWT
    const token = jwt.sign(
      { id: user.id, correo: user.correo, nombre: user.nombre },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo
      }
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
