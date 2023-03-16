import { UserEntity } from '../entity/user.entity';

export class FindUserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(entity: UserEntity) {
    this.id = entity.id;
    this.email = entity.email;
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
  }
}
