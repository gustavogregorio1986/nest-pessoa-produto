import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './entidade/pessoa.entity';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(@InjectRepository(Pessoa) private repo: Repository<Pessoa>) {}

  create(dto: CreatePessoaDto) {
    const pessoa = this.repo.create(dto);
    return this.repo.save(pessoa);
  }

  findAll() {
    return this.repo.find({ relations: ['produtos'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['produtos'] });
  }

  update(id: number, dto: UpdatePessoaDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}