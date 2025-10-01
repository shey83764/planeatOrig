// 📁 routes/userRoutes.ts
import { Router } from "express";
import { loginUser, updateUser} from "../controllers/userController";

const router = Router();

router.post("/login", loginUser);

router.put("/:user_id", updateUser);

export default router; // ✅ esto es clave
