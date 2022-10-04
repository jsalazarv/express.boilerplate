import { Request, Response } from 'express';
import { UserRepository } from '../respositories/user.repository';

export const index = async (_: Request, response: Response): Promise<void> => {
  try {
    const userList = await UserRepository.find({
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    response.json(userList);
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Something went wrong, please try again',
    });
  }
};
