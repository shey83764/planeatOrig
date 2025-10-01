import { Request, Response } from 'express';
import pool from '../db';

// Obtener perfil
export const getPerfil = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const [rows] = await pool.query(
      `SELECT 
         nombre,
         apellido,
         correo,
         genero,
         edad,
         peso,
         altura,
         actividad,
         objetivo
       FROM usuarios
       WHERE id = ?`,
      [userId]
    );

    if ((rows as any).length === 0) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }

    const usuario = (rows as any)[0];

    // Traducimos el género a algo más amigable
    let generoFriendly = usuario.genero;
    switch (usuario.genero) {
      case 'M':
        generoFriendly = 'Hombre';
        break;
      case 'F':
        generoFriendly = 'Mujer';
        break;
      case 'O':
        generoFriendly = 'Otro';
        break;
    }

    res.json({ 
      ...usuario,
      genero: generoFriendly
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener perfil' });
  }
};

// Actualizar perfil
export const updatePerfil = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updates = req.body; // { nombre: "Nuevo valor", peso: 70, ... }

  if (!updates || Object.keys(updates).length === 0) {
    return res.status(400).json({ message: 'No hay datos para actualizar' });
  }

  try {
    const setClause = Object.keys(updates)
      .map(key => `${key} = ?`)
      .join(', ');
    const values = Object.values(updates);

    await pool.query(
      `UPDATE usuarios SET ${setClause} WHERE id = ?`,
      [...values, userId]
    );

    res.json({ message: 'Perfil actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar perfil' });
  }
};
