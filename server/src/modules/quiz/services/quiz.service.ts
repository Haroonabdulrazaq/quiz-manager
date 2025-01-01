import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepsoitory: Repository<Quiz>,
  ) {}
  async createQuiz(payload) {
    return await this.quizRepsoitory.save(payload);
  }

  async getAllQuiz() {
    const [data, count] = await this.quizRepsoitory.findAndCount({
      relations: ['questions', 'questions.options'],
      take: 20,
      skip: 0,
    });

    return {
      data,
      count,
      maessage: 'All quiz are retrieved successfully',
    };
  }

  async getQuizById(quizId: number) {
    const data = await this.quizRepsoitory.findOne({
      where: { id: quizId },
      relations: ['questions'],
    });
    if (!data) {
      throw new NotFoundException('Quiz not found!');
    }
    return data;
  }
}
