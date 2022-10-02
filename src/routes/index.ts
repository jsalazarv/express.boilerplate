import { Request, Response, Router } from 'express';
import config from '../config';

const router = Router();

router.get('/', (_: Request, res: Response): void => {
  res.json({
    app: config.app.name,
    version: 'v1.0.0',
  });
});

export default router;
