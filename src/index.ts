import express from 'express';
import config from './config';

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.json({
    app: config.app.name,
    version: 'v1.0.0',
  });
});

app.listen(config.app.port, () => {
  console.log(`The server is running on port: ${config.app.port}`);
});

export default app;
