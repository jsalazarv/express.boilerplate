export default {
  mysql: {
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 3306),
    database: process.env.DB_NAME || 'sample',
    username: process.env.DB_USERNAME || 'administrator',
    password: process.env.DB_PASSWORD || 'secret',
  },
};
