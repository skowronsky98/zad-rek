import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  firstName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  lastName!: string;
}
// is not empty sprawdz czy nie jest puste
