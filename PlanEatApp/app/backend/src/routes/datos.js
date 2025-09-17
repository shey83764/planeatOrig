import express from "express";
import { saveDatos } from "../controllers/datosController.js";

const router = express.Router();

// POST /api/datos
router.post("/", saveDatos);

export default router;
