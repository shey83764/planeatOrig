// 📁 controllers/perfilController.ts
import { Request, Response } from "express";
import pool from "../db";

// Obtener perfil por ID
export const getPerfil = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, apellido, correo, photoURL FROM usuarios WHERE id = ?",
      [userId]
    );

    if ((rows as any[]).length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json((rows as any[])[0]);
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Actualizar perfil
export const updatePerfil = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { nombre, apellido, correo, photoURL } = req.body;

  try {
    const [result] = await pool.query(
      `UPDATE usuarios 
       SET nombre = ?, apellido = ?, correo = ?, photoURL = ? 
       WHERE id = ?`,
      [nombre, apellido, correo, photoURL || null, userId]
    );

    res.json({ message: "Perfil actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
