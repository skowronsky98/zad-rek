import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(dataSourceOptions), RedisModule],
})
export class AppModule {}
