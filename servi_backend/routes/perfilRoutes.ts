// 📁 routes/perfilRoutes.ts
import { Router } from "express";
import { getPerfil, updatePerfil } from "../controllers/perfilController";

const router = Router();

// GET /api/v1/perfil/:userId → obtener datos del usuario
router.get("/:userId", getPerfil);

// PUT /api/v1/perfil/:userId → actualizar datos del usuario
router.put("/:userId", updatePerfil);

export default router;
