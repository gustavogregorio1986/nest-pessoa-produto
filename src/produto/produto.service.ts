import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entidade/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(@InjectRepository(Produto) private repo: Repository<Produto>) {}

  create(dto: CreateProdutoDto) {
    const produto = this.repo.create({
      nome: dto.nome,
      preco: dto.preco,
      pessoa: { id: dto.pessoaId },
    });
    return this.repo.save(produto);
  }

  findAll() {
    return this.repo.find({ relations: ['pessoa'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['pessoa'] });
  }

  update(id: number, dto: UpdateProdutoDto) {
    return this.repo.update(id, {
      nome: dto.nome,
      preco: dto.preco,
      pessoa: { id: dto.pessoaId },
    });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}