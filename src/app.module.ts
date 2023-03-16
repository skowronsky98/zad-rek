import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CREATE_USER',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
    ConfigModule.forRoot({
      load: [appConfig],
      cache: true,
    }),
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    RedisModule,
  ],
})
export class AppModule {}
