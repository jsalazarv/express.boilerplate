import supertest from 'supertest';

import http from 'http';
import { app, start } from '../../src/app';
import { UserRepository } from '../../src/respositories/UserRepository';

describe('App User routes', () => {
  let server: http.Server;
  const client = supertest(app);

  beforeAll(async () => {
    server = await start();
  });

  afterEach(() => {
    UserRepository.clear();
  });

  afterAll(() => {
    server.close();
  });

  describe('GET /users', () => {
    test('Should return error message when something went wrong', async () => {
      jest.spyOn(UserRepository, 'find').mockRejectedValueOnce(new Error('Internal server error'));

      const response = await client.get('/users');
      expect(response.status).toBe(500);
      expect(response.type).toBe('application/json');
      expect(response.body).toMatchObject({ status: 500, message: 'Something went wrong, please try again' });
    });

    test('Should return empty array an status code 200 if there are not records in database', async () => {
      const response = await client.get('/users');

      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toMatchObject([]);
    });

    test('Should return a single record that exist in database', async () => {
      const userData = {
        username: 'Juan',
        email: 'juan@gmail.com',
        password: 'secret',
      };

      await UserRepository.save(userData);

      const response = await client.get('/users');

      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toMatchObject([
        {
          id: expect.any(Number),
          username: userData.username,
          email: userData.email,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
      ]);
    });

    test('Should return a three records that exist in database', async () => {
      const userData = [
        {
          username: 'Johnny Blaze',
          email: 'johnny@gmail.com',
          password: 'secret',
        },
        {
          username: 'Jessica Jones',
          email: 'jessica@gmail.com',
          password: 'secret',
        },
        {
          username: 'Peter Parker',
          email: 'peter@gmail.com',
          password: 'secret',
        },
      ];

      await UserRepository.insert(userData);

      const response = await client.get('/users');

      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toMatchObject([
        {
          id: expect.any(Number),
          username: userData[0].username,
          email: userData[0].email,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
        {
          id: expect.any(Number),
          username: userData[1].username,
          email: userData[1].email,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
        {
          id: expect.any(Number),
          username: userData[2].username,
          email: userData[2].email,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
      ]);
    });
  });
});
