import db from "../db.js";

export const saveObjetivos = async (req, res) => {
  try {
    const { user_id, objetivo, nivelActividad } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: "user_id requerido" });
    }

    await db.query(
      `INSERT INTO objetivos_usuario (user_id, objetivo, nivel_actividad)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE objetivo=?, nivel_actividad=?`,
      [user_id, objetivo, nivelActividad, objetivo, nivelActividad]
    );

    res.json({ message: "Objetivos guardados con éxito" });
  } catch (error) {
    console.error("Error en saveObjetivos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
