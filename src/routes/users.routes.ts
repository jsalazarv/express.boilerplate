import { Request, Response, Router } from 'express';
import { UserRepository } from '../respositories/UserRepository';

const router = Router();

router.get('/', async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await UserRepository.find({
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong, please try again',
    });
  }
});

export default router;
