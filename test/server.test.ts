import { start } from '../src/app';
import '../src/index';

jest.mock('../src/app', () => ({ start: jest.fn() }));

describe('Server test', () => {
  test('Should call start function once', () => {
    expect(start).toBeCalledTimes(1);
  });
});
