import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByName(username);
    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    console.log('User not found or password mismatch');
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: any) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = { ...user, password: hashedPassword };
    return this.usersService.create(newUser);
  }
}
