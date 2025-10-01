// servi_backend/routes/recetasRoutes.ts
import { Router } from "express";
import {
  saveReceta,
  getRecetasByUser,
  getRecetaById,
  updateReceta,
  deleteReceta
} from "../controllers/RecetasController";

const router = Router();

// Crear receta
router.post("/", saveReceta);

// Obtener todas las recetas de un usuario
router.get("/user/:user_id", getRecetasByUser);

// Obtener receta por id
router.get("/:id", getRecetaById);

// Actualizar receta
router.put("/:id", updateReceta);

// Eliminar receta
router.delete("/:id", deleteReceta);

export default router;
