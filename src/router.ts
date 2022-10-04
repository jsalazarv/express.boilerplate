import { Router } from 'express';
import appRoutes from './modules/app/routes/app.routes';
import usersRoutes from './modules/user/routes/users.routes';

const router = Router();

router.use('/', appRoutes);
router.use('/users', usersRoutes);

export default router;
