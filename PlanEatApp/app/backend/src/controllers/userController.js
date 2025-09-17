import db from "../db.js";

export const savePerfilUsuario = async (req, res) => {
  try {
    const { user_id, nombre, apellido, email } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: "user_id requerido" });
    }

    await db.query(
      `INSERT INTO perfil_usuario (user_id, nombre, apellido, email)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE nombre=?, apellido=?, email=?`,
      [user_id, nombre, apellido, email, nombre, apellido, email]
    );

    res.json({ message: "Perfil guardado con éxito" });
  } catch (error) {
    console.error("Error en savePerfilUsuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
