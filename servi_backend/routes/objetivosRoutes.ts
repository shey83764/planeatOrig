// servi_backend/routes/objetivosRoutes.ts
import { Router } from "express";
import { 
  saveObjetivo, 
  getAllObjetivos, 
  getObjetivosByUser, 
  updateObjetivo, 
  deleteObjetivo 
} from "../controllers/objetivosController";

const router = Router();

// Crear un objetivo
router.post("/", saveObjetivo);

// Traer todos los objetivos
router.get("/", getAllObjetivos);

// Traer objetivos de un usuario específico
router.get("/user/:user_id", getObjetivosByUser);

// Actualizar un objetivo por ID
router.put("/:objetivo_id", updateObjetivo);

// Borrar un objetivo por ID
router.delete("/:objetivo_id", deleteObjetivo);

export default router;
