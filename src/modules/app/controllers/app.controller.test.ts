import { index } from './app.controller';
import config from '../../../config';
import { getMockReq, getMockRes } from '@jest-mock/express';

describe('AppController', () => {
  describe('index()', () => {
    test('Should be a function', () => {
      expect(typeof index).toBe('function');
    });

    test('Should response a object with the app info', async () => {
      const appInfo = {
        app: config.app.name,
        version: 'v1.0.0',
      };
      const request = getMockReq();
      const { res } = getMockRes();

      await index(request, res);

      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith(appInfo);
    });
  });
});
