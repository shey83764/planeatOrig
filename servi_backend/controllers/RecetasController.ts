import { Request, Response } from "express";
import db from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

// Crear receta
export const saveReceta = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, user_id } = req.body;
    const [result] = await db.query<OkPacket>(
      "INSERT INTO recetas (nombre, descripcion, user_id) VALUES (?, ?, ?)",
      [nombre, descripcion, user_id]
    );
    res.json({ message: "Receta creada", recetaId: result.insertId });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Obtener recetas por usuario
export const getRecetasByUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM recetas WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Obtener receta por id
export const getRecetaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM recetas WHERE id = ?",
      [id]
    );
    res.json(rows[0] || null);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Actualizar receta
export const updateReceta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const [result] = await db.query<OkPacket>(
      "UPDATE recetas SET nombre = ?, descripcion = ? WHERE id = ?",
      [nombre, descripcion, id]
    );
    res.json({ message: "Receta actualizada", affectedRows: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Eliminar receta
export const deleteReceta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result] = await db.query<OkPacket>(
      "DELETE FROM recetas WHERE id = ?",
      [id]
    );
    res.json({ message: "Receta eliminada", affectedRows: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error });
  }
};
