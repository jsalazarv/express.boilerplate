import supertest from 'supertest';

import { app, start } from '../../../app';
import * as http from 'http';

const client = supertest(app);

describe('app:routes', () => {
  let server: http.Server;

  beforeAll(async () => {
    server = await start();
  });

  afterAll(() => {
    server.close();
  });

  test('GET /', async () => {
    const response = await client.get('/');

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toMatchObject({
      app: 'Express Boilerplate Typescript',
      version: 'v1.0.0',
    });
  });
});
