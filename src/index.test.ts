import { start } from './app';
import './index';

jest.mock('../src/app', () => ({ start: jest.fn() }));

describe('Server test', () => {
  test('Should call start function once', () => {
    expect(start).toBeCalledTimes(1);
  });
});
