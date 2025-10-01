// hashPasswords.js
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

// Configuración de la base de datos
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plan_eat'
});

async function hashPasswords() {
  try {
    // Traer todos los usuarios
    const [usuarios] = await db.query("SELECT id, password FROM usuarios");

    for (let user of usuarios) {
      // Salt y hash
      const hashedPassword = await bcrypt.hash(user.password, 10);

      // Actualizar la contraseña en la DB
      await db.query("UPDATE usuarios SET password = ? WHERE id = ?", [hashedPassword, user.id]);
      console.log(`Contraseña de usuario ID ${user.id} hasheada ✅`);
    }

    console.log("Todas las contraseñas han sido actualizadas correctamente 🎉");
    process.exit(0);

  } catch (err) {
    console.error("Error al hashear contraseñas:", err);
    process.exit(1);
  }
}

hashPasswords();
