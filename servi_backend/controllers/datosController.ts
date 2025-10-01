// 📁 controllers/datosController.ts
import { Request, Response } from "express";
import db from "../db"; // tu conexión a MySQL
import { calcularTMBYMacros, DatosUsuario } from "../utils/calculadoraNutricional";

// Extendemos Request para tipar body y params
interface DatosBody extends DatosUsuario {
  user_id: number;
}

interface DatosParams {
  user_id: string;
}

// POST /api/datos
export const saveDatos = async (req: Request<{}, {}, DatosBody>, res: Response) => {
  const { user_id, genero, edad, peso, estatura, nivelActividad, objetivo } = req.body;

  if (!user_id || !genero || !edad || !peso || !estatura || !nivelActividad || !objetivo) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }

  const usuario: DatosUsuario = { genero, edad, peso, estatura, nivelActividad, objetivo };
  const macros = calcularTMBYMacros(usuario);

  try {
    await db.execute(
      `INSERT INTO datos_usuario 
      (user_id, genero, edad, peso, estatura, nivelActividad, objetivo, calorias, proteinas, carbohidratos, grasas)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, genero, edad, peso, estatura, nivelActividad, objetivo, macros.calorias, macros.proteinas, macros.carbohidratos, macros.grasas]
    );

    return res.status(201).json({ message: "Datos guardados", macros });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

// GET /api/datos/:user_id
export const getDatosByUser = async (req: Request<DatosParams>, res: Response) => {
  const { user_id } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM datos_usuario WHERE user_id = ?",
      [user_id]
    );

    return res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
// PUT /api/datos/:user_id
export const updateDatos = async (req: Request<DatosParams, {}, DatosBody>, res: Response) => {
  const { user_id } = req.params;
  const { genero, edad, peso, estatura, nivelActividad, objetivo } = req.body;

  const usuario: DatosUsuario = { genero, edad, peso, estatura, nivelActividad, objetivo };
  const macros = calcularTMBYMacros(usuario);

  try {
    await db.execute(
      `UPDATE datos_usuario SET
        genero = ?, edad = ?, peso = ?, estatura = ?, nivelActividad = ?, objetivo = ?,
        calorias = ?, proteinas = ?, carbohidratos = ?, grasas = ?
      WHERE user_id = ?`,
      [genero, edad, peso, estatura, nivelActividad, objetivo, macros.calorias, macros.proteinas, macros.carbohidratos, macros.grasas, user_id]
    );

    return res.json({ message: "Datos actualizados", macros });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

// DELETE /api/datos/:user_id
export const deleteDatos = async (req: Request<DatosParams>, res: Response) => {
  const { user_id } = req.params;

  try {
    await db.execute(`DELETE FROM datos_usuario WHERE user_id = ?`, [user_id]);
    return res.json({ message: "Datos eliminados" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
