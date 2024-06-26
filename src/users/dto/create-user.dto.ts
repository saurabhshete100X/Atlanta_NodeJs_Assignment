import { IsString, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../schemas/user.schema';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  @MinLength(6)
  password: string;
}
