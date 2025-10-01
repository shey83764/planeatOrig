// datosRoutes.ts
import { Router } from "express";
import { saveDatos, getDatosByUser, updateDatos, deleteDatos } from "../controllers/datosController";

const router = Router();

router.post("/", saveDatos);
router.get("/:user_id", getDatosByUser);
router.put("/:user_id", updateDatos);
router.delete("/:user_id", deleteDatos);

export default router;
