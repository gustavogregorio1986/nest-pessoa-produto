// create-produto.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  pessoaId: number;
}