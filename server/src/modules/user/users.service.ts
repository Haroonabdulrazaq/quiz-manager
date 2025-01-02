import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user-dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(payload: createUserDto) {
    try {
      const { password } = payload;
      const salt = await bcrypt.genSalt();

      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        name: payload.name,
        email: payload.email,
        password: hashedPassword,
      };

      const savedUser = await this.userRepository.save(newUser);

      return savedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll() {
    const users = await this.userRepository.find();

    return users;
  }
}
