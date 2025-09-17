import db from "../db.js";

export const saveDatos = async (req, res) => {
  try {
    const { user_id, calorias, proteinas, carbohidratos, grasas } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: "user_id requerido" });
    }

    await db.query(
      `INSERT INTO datos_usuario (user_id, calorias, proteinas, carbohidratos, grasas)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE calorias=?, proteinas=?, carbohidratos=?, grasas=?`,
      [
        user_id,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
      ]
    );

    res.json({ message: "Datos guardados con éxito" });
  } catch (error) {
    console.error("Error en saveDatos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
