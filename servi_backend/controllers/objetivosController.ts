// servi_backend/controllers/objetivosController.ts
import { Request, Response } from "express";
import db from "../db";
import { calcularTMBYMacros, DatosUsuario } from "../utils/calculadoraNutricional";

// Guardar un objetivo (con macros)
export const saveObjetivo = async (req: Request, res: Response) => {
  try {
    const { user_id, objetivo, descripcion, genero, edad, peso, estatura, nivelActividad } = req.body;

    if (!user_id || !objetivo || !genero || !edad || !peso || !estatura || !nivelActividad) {
      return res.status(400).json({ message: "Faltan datos obligatorios para calcular macros" });
    }

    const usuario: DatosUsuario = { genero, edad, peso, estatura, nivelActividad, objetivo };
    const macros = calcularTMBYMacros(usuario);

    const [result] = await db.query(
      `INSERT INTO objetivos_usuario 
        (user_id, objetivo, descripcion, nivel_actividad, calorias, proteinas, carbohidratos, grasas)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, objetivo, descripcion, nivelActividad, macros.calorias, macros.proteinas, macros.carbohidratos, macros.grasas]
    );

    res.json({ message: "Objetivo guardado", macros, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

// Actualizar un objetivo (con recalculo de macros)
export const updateObjetivo = async (req: Request, res: Response) => {
  try {
    const { objetivo_id } = req.params;
    const { objetivo, descripcion, genero, edad, peso, estatura, nivelActividad } = req.body;

    if (!genero || !edad || !peso || !estatura || !nivelActividad || !objetivo) {
      return res.status(400).json({ message: "Faltan datos obligatorios para calcular macros" });
    }

    const usuario: DatosUsuario = { genero, edad, peso, estatura, nivelActividad, objetivo };
    const macros = calcularTMBYMacros(usuario);

    const [result] = await db.query(
      `UPDATE objetivos_usuario 
       SET objetivo = ?, descripcion = ?, nivel_actividad = ?, calorias = ?, proteinas = ?, carbohidratos = ?, grasas = ?
       WHERE id = ?`,
      [objetivo, descripcion, nivelActividad, macros.calorias, macros.proteinas, macros.carbohidratos, macros.grasas, objetivo_id]
    );

    res.json({ message: "Objetivo actualizado", macros, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

// Los otros endpoints se mantienen igual
export const getAllObjetivos = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM objetivos_usuario");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getObjetivosByUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const [rows] = await db.query("SELECT * FROM objetivos_usuario WHERE user_id = ?", [user_id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteObjetivo = async (req: Request, res: Response) => {
  try {
    const { objetivo_id } = req.params;
    const [result] = await db.query("DELETE FROM objetivos_usuario WHERE id = ?", [objetivo_id]);
    res.json({ message: "Objetivo eliminado", result });
  } catch (error) {
    res.status(500).json({ error });
  }
};
