import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pessoa } from '../../pessoa/entidade/pessoa.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.produtos)
  pessoa: Pessoa;
}