import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { createUserDto } from './dto/create-user-dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async createUser(@Body() payload: createUserDto) {
    const data = await this.userService.create(payload);
    return { data, message: 'User created successfully!' };
  }
  @Get('/')
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }
}
