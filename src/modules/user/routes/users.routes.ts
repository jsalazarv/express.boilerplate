import { Request, Response, Router } from 'express';
import { index } from '../controllers/user.controller';
import { UserRepository } from '../respositories/user.repository';

const router = Router();

router.get('/', index);
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    //  TODO: Add validations

    const user = UserRepository.create(req.body);
    await UserRepository.save(user);

    //  TODO: Return object created

    res.json();
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong, please try again',
    });
  }
});

export default router;
