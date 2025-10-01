// servi_backend/controllers/progressController.ts
import { Request, Response } from "express";
import db from "../db";

export const saveProgress = async (req: Request, res: Response) => {
  try {
    const { user_id, fecha, peso, grasa, musculo } = req.body;
    const result = await db.query(
      "INSERT INTO progress_usuario (user_id, fecha, peso, grasa, musculo) VALUES (?, ?, ?, ?, ?)",
      [user_id, fecha, peso, grasa, musculo]
    );
    res.json({ message: "Progreso guardado", result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getProgressByUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const [rows] = await db.query(
      "SELECT * FROM progress_usuario WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};
