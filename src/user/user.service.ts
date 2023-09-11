import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { hashPwd } from '../utils/hash-pwd';

@Injectable()
export class UserService {
  // @TODO: Zrób filtr do zwracania użytkownika
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email;
    user.pwdHash = hashPwd(createUserDto.pwd);
    await user.save();
    return user;
  }

  async findAll() {
    return await User.find();
  }

  async findOne(id: string) {
    return await User.findOne({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });
    user.email = updateUserDto.email;
    user.pwdHash = hashPwd(updateUserDto.pwd);
    await user.save();
    return user;
  }

  async remove(id: string) {
    const user = await User.findOne({ where: { id } });
    await user.remove();
  }
}
