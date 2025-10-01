// 📁 controllers/authController.ts
import { Request, Response } from "express";
import db from "../db";
import bcrypt from "bcryptjs";
import { RowDataPacket, ResultSetHeader } from "mysql2";

// ------------------- HELPERS -------------------
const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

const findUserByEmail = async (email: string) => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM usuarios WHERE correo = ?",
    [email]
  );
  return rows[0];
};

const insertUser = async (
  nombre: string,
  apellido: string,
  email: string,
  hashedPassword: string,
  sexo?: string,
  edad?: number,
  altura?: number,
  peso?: number,
  actividad?: string,
  objetivo?: string
) => {
  const [result] = await db.execute<ResultSetHeader>(
    `INSERT INTO usuarios
      (nombre, apellido, correo, password, genero, edad, altura, peso, actividad, objetivo)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [nombre, apellido, email, hashedPassword, sexo || null, edad || null, altura || null, peso || null, actividad || null, objetivo || null]
  );
  return (result as ResultSetHeader).insertId;
};

const insertUserProfile = async (
  userId: number,
  nombre: string,
  apellido: string,
  email: string,
  sexo?: string,
  edad?: number,
  peso?: number,
  altura?: number
) => {
  await db.execute(
    `INSERT INTO perfil_usuario
      (user_id, nombre, apellido, email, genero, edad, peso, estatura)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [userId, nombre, apellido, email, sexo || null, edad || null, peso || null, altura || null]
  );
};

const insertUserObjectives = async (
  userId: number,
  objetivo?: string,
  nivelActividad?: string
) => {
  await db.execute(
    `INSERT INTO objetivos_usuario
      (user_id, objetivo, nivel_actividad)
     VALUES (?, ?, ?)`,
    [userId, objetivo || null, nivelActividad || null]
  );
};

// ------------------- CONTROLLERS -------------------
export const register = async (req: Request, res: Response) => {
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
  } = req.body || {};

  try {
    // Validación de campos obligatorios
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Correo ya registrado" });
    }

    const hashedPassword = await hashPassword(password);
    const userId = await insertUser(nombre, apellido, email, hashedPassword, sexo, edad, altura, peso, actividad, objetivo);
    await insertUserProfile(userId, nombre, apellido, email, sexo, edad, peso, altura);

    // Determinar nivel de actividad según objetivo
    let nivelActividad = actividad;
    if (objetivo === "perder") nivelActividad = deficit || actividad || null;
    if (objetivo === "ganar") nivelActividad = ganarNivel || actividad || null;
    if (objetivo === "mantener") nivelActividad = mantenerNivel || actividad || null;

    await insertUserObjectives(userId, objetivo, nivelActividad);

    return res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("❌ Error en register:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
