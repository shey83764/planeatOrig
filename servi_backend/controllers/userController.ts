// 📁 routes/usersRoutes.ts
import { Router, Request, Response } from "express";
import pool from "../db"; // tu conexión a MySQL

const router = Router();

// Obtener usuario por ID
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, apellido, correo, photoURL FROM usuarios WHERE id = ?",
      [id]
    );
    if ((rows as any[]).length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json((rows as any[])[0]);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
