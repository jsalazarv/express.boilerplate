export default {
  env: process.env.NODE_ENV || 'production',
  name: process.env.APP_NAME || 'Express Boilerplate',
  port: +(process.env.APP_PORT || 3000),
};
