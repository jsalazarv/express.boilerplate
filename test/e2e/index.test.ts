import supertest from 'supertest';

import { app, start } from '../../src/app';

const server = supertest(app);

describe('app:routes', () => {
  beforeAll(async () => await start());

  test('GET /', async () => {
    const response = await server.get('/');

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toMatchObject({
      app: 'Express Boilerplate Typescript',
      version: 'v1.0.0',
    });
  });
});
