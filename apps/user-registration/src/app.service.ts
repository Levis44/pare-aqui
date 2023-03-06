import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  users: Array<UserEntity> = [];

  create(user: UserEntity): Array<UserEntity> {
    this.users.push(user);

    return this.users;
  }
}
