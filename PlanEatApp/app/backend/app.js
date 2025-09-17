import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import objetivosRoutes from "./routes/objetivos.js";
import datosRoutes from "./routes/datos.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", usersRoutes);
app.use("/api/objetivos", objetivosRoutes);
app.use("/api/datos", datosRoutes);

export default app;
