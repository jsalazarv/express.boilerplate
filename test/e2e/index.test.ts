import app from '../../src';
import supertest from 'supertest';

const server = supertest(app);

describe('GET /', () => {
  test('Should return the API info', async () => {
    const response = await server.get('/');

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toMatchObject({
      app: 'Express Boilerplate Typescript',
      version: 'v1.0.0',
    });
  });
});
