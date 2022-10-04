import { Router } from 'express';
import { index } from '../controllers/app.controller';

const router = Router();

router.get('/', index);

export default router;
