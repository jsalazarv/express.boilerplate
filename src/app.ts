import express from 'express';
import { Server } from 'http';

import config from './config';
import router from './routes';

export const app = express();

// Initialize app dependencies
export async function setup(): Promise<void> {
  app.use(express.json());
  app.use(router);
}

// To start server
export async function start(): Promise<Server> {
  await setup();

  return app.listen(config.app.port, () => {
    console.log(`The server is running on port: ${config.app.port}`);
  });
}
