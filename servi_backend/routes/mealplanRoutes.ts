import { Router } from "express";
import { addRecetaToPlan, getRecetasByPlan, deleteRecetaFromPlan } from "../controllers/mealplanController";

const router = Router();

router.post("/:plan_id/receta", addRecetaToPlan);
router.get("/:plan_id/recetas", getRecetasByPlan);
router.delete("/:plan_id/receta/:receta_id", deleteRecetaFromPlan);

export default router;
