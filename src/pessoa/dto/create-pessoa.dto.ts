// create-pessoa.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;
}