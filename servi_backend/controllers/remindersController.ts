import { Request, Response } from "express";
import { RowDataPacket, OkPacket } from "mysql2";
import db from "../db";

// Traer todos los reminders de un usuario
export const getReminders = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM reminders WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Guardar un reminder nuevo
export const saveReminder = async (req: Request, res: Response) => {
  try {
    const { user_id, titulo, descripcion, fecha } = req.body;
    const [result] = await db.query<OkPacket>(
      "INSERT INTO reminders (user_id, titulo, descripcion, fecha) VALUES (?, ?, ?, ?)",
      [user_id, titulo, descripcion, fecha]
    );
    res.json({ message: "Reminder guardado", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error });
  }
};
