import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './app.service';
import { UserEntity } from './entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: UserEntity): Array<UserEntity> {
    return this.userService.create(user);
  }
}
