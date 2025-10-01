import { Router } from "express";
import { saveProgress, getProgressByUser } from "../controllers/progressController";

const router = Router();

router.post("/", saveProgress);
router.get("/:user_id", getProgressByUser);

export default router;
