import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, UpdateResult, DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user-body.dto';
import { FindUserDto } from './dto/find-user-body.dto';
import { UpdateUserDto } from './dto/update-user-body.dto';
import { UserEntity } from './entity/user.entity';
import { USER_NOT_FOUND } from './user.constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private dataSource: DataSource,
  ) {}

  async findOne(id: string): Promise<FindUserDto> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw USER_NOT_FOUND;
    return new FindUserDto(user);
  }

  async create(createUserDto: CreateUserDto): Promise<FindUserDto> {
    return await this.dataSource.transaction(async (entityManager) => {
      const user = await entityManager.save(UserEntity, createUserDto);
      return new FindUserDto(user);
    });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    await this.findOne(id);
    return await this.dataSource.transaction(async (entityManager) => {
      return await entityManager.update(UserEntity, id, updateUserDto);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return await this.dataSource.transaction(async (entityManager) => {
      return await entityManager.delete(UserEntity, id);
    });
  }
}
