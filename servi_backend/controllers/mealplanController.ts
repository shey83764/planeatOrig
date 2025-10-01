// servi_backend/controllers/mealplanController.ts
import { Request, Response } from "express";
import db from "../db";

// Agregar receta a un plan
export const addRecetaToPlan = async (req: Request, res: Response) => {
  try {
    const { plan_id, receta_id } = req.body;
    const result = await db.query(
      "INSERT INTO mealplan_recetas (plan_id, receta_id) VALUES (?, ?)",
      [plan_id, receta_id]
    );
    res.json({ message: "Receta agregada al plan", result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Obtener recetas de un plan
export const getRecetasByPlan = async (req: Request, res: Response) => {
  try {
    const { plan_id } = req.params;
    const [rows] = await db.query(
      "SELECT r.* FROM recetas r JOIN mealplan_recetas m ON r.id = m.receta_id WHERE m.plan_id = ?",
      [plan_id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Eliminar receta de un plan
export const deleteRecetaFromPlan = async (req: Request, res: Response) => {
  try {
    const { plan_id, receta_id } = req.params;
    const result = await db.query(
      "DELETE FROM mealplan_recetas WHERE plan_id = ? AND receta_id = ?",
      [plan_id, receta_id]
    );
    res.json({ message: "Receta eliminada del plan", result });
  } catch (error) {
    res.status(500).json({ error });
  }
};
