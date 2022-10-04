import { index } from './user.controller';
import { UserRepository } from '../respositories/user.repository';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { User } from '../entities/user.entity';

describe('UserController', () => {
  describe('index()', () => {
    test('Should be a function', () => {
      expect(typeof index).toBe('function');
    });

    test('Should find all user records', async () => {
      jest.spyOn(UserRepository, 'find').mockResolvedValueOnce([]);
      const request = getMockReq();
      const { res } = getMockRes();

      await index(request, res);

      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith([]);
    });

    test('Should response with data if there all records', async () => {
      const userList = [
        new User({
          username: 'Johnny Blaze',
          email: 'johnny@gmail.com',
          password: 'secret',
        }),
        new User({
          username: 'Jessica Jones',
          email: 'jessica@gmail.com',
          password: 'secret',
        }),
      ];

      jest.spyOn(UserRepository, 'find').mockResolvedValueOnce(userList);
      const request = getMockReq();
      const { res } = getMockRes();

      await index(request, res);

      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith(userList);
    });

    test('Should response with error object if something went wrong ', async () => {
      const errorObject = {
        status: 500,
        message: 'Something went wrong, please try again',
      };

      jest.spyOn(UserRepository, 'find').mockRejectedValueOnce(new Error());
      const request = getMockReq();
      const { res } = getMockRes();

      await index(request, res);

      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith(errorObject);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status).toBeCalledWith(500);
    });
  });
});
