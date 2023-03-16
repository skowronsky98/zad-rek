import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
}));
