import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from '../config';
import path from 'path';

const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: config.database.mysql.host,
  port: config.database.mysql.port,
  username: config.database.mysql.username,
  password: config.database.mysql.password,
  database: config.database.mysql.database,
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.ts')],
  migrations: [path.join(__dirname, '../database/migrations/**/*.ts')],
  subscribers: [],
});

export default MySQLDataSource;