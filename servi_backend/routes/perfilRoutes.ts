import { Router } from 'express';
import { getPerfil, updatePerfil } from '../controllers/perfilController';

const router = Router();

router.get('/:userId', getPerfil);
router.put('/:userId', updatePerfil); // <-- nueva ruta para actualizar

export default router;
