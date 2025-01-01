import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @Column({
    default: null,
  })
  answer: string;

  @OneToMany(() => Option, (options) => options.question)
  options: Option[];

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
