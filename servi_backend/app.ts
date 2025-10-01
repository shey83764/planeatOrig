import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import os from "os";

// Rutas
import authRoutes from "./routes/authRoutes";
import datosRoutes from "./routes/datosRoutes";
import mealplanRoutes from "./routes/mealplanRoutes";
import objetivosRoutes from "./routes/objetivosRoutes";
import progressRoutes from "./routes/progressRoutes";
import recetasRoutes from "./routes/recetasRoutes";
import remindersRoutes from "./routes/remindersRoutes";
import userRoutes from "./routes/userRoutes";
import loginRoutes from "./routes/loginRoutes";
import perfilRoutes from "./routes/perfilRoutes";

dotenv.config();

const app = express();

// ✅ PORT siempre como number
const PORT: number = parseInt(process.env.PORT || "3000", 10);

// ------------------- MIDDLEWARES -------------------
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Middleware de debug para ver requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("✅ REQUEST:", req.method, req.originalUrl);
  next();
});

// ------------------- PREFIJO DE API -------------------
const API_PREFIX = "/api/v1";

// ------------------- RUTAS -------------------
app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/perfil`, perfilRoutes); // <--- Esto hace que GET /api/v1/perfil/:userId funcione
app.use(`${API_PREFIX}/datos`, datosRoutes);
app.use(`${API_PREFIX}/mealplans`, mealplanRoutes);
app.use(`${API_PREFIX}/objetivos`, objetivosRoutes);
app.use(`${API_PREFIX}/progress`, progressRoutes);
app.use(`${API_PREFIX}/recetas`, recetasRoutes);
app.use(`${API_PREFIX}/reminders`, remindersRoutes);
app.use(`${API_PREFIX}/users`, userRoutes);
app.use(`${API_PREFIX}/login`, loginRoutes);
app.use(`${API_PREFIX}/perfil`, perfilRoutes);

// ------------------- ROOT -------------------
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "✅ Backend de PlanEat funcionando",
    version: "v1",
    routes: [
      `${API_PREFIX}/auth/login`,
      `${API_PREFIX}/perfil/:userId`, // <--- corregido
      `${API_PREFIX}/auth/register`,
      `${API_PREFIX}/datos/...`,
      `${API_PREFIX}/mealplans/...`,
      `${API_PREFIX}/objetivos/...`,
      `${API_PREFIX}/progress/...`,
      `${API_PREFIX}/recetas/...`,
      `${API_PREFIX}/reminders/...`,
      `${API_PREFIX}/users/...`,
    ],
  });
});

// ------------------- 404 -------------------
app.use((req: Request, res: Response) => {
  console.log("⚠️ Ruta no encontrada:", req.method, req.originalUrl);
  res.status(404).json({ error: "Ruta no encontrada" });
});

// ------------------- ERROR GLOBAL -------------------
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error global:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// ------------------- LEVANTAR SERVIDOR -------------------
// Detectar IP local en la red
const interfaces = os.networkInterfaces();
const localIP = Object.values(interfaces)
  .flatMap(iface => iface ?? [])
  .find(i => i?.family === "IPv4" && !i.internal)?.address;

app.listen(PORT, () => {
  if (localIP) {
    console.log(`🚀 Servidor corriendo en http://${localIP}:${PORT}`);
  } else {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
  }
});
