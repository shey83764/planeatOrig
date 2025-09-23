import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tu_password",
  database: "plan_eat", // el nombre de tu BD
});

export default db;
