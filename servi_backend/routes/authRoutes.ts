import { Router } from "express";
import { register } from "../controllers/authController";

const router = Router();

// Solo POST
router.post("/register", register);

export default router;
