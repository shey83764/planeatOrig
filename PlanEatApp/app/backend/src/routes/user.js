import express from "express";
import { savePerfilUsuario } from "../controllers/usersController.js";

const router = express.Router();

// POST /api/users/perfil
router.post("/perfil", savePerfilUsuario);

export default router;
