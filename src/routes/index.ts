import { Request, Response, Router } from 'express';
import config from '../config';
import usersRoutes from './users.routes';

const router = Router();

router.get('/', (_: Request, res: Response): void => {
  res.json({
    app: config.app.name,
    version: 'v1.0.0',
  });
});

router.use('/users', usersRoutes);

export default router;
