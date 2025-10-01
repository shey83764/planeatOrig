// servi_backend/routes/remindersRoutes.ts
import { Router } from "express";
import { getReminders, saveReminder } from "../controllers/remindersController";

const router = Router();

// Obtener todos los reminders de un usuario
router.get("/:user_id", getReminders);

// Crear un nuevo reminder
router.post("/", saveReminder);

export default router;
