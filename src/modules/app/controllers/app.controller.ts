import { Request, Response } from 'express';
import config from '../../../config';

export const index = (_: Request, res: Response): void => {
  res.json({
    app: config.app.name,
    version: 'v1.0.0',
  });
};
