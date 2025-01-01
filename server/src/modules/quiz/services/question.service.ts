import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { createQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(question: createQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save(question);

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return {
      newQuestion,
      message: 'Question created successfully',
    };
  }

  async findQuestionById(questionId: number) {
    const question = await this.questionRepository.findOne({
      where: { id: questionId },
      relations: ['options'],
    });

    if (!question) {
      throw new NotFoundException('Question not found');
    }

    return question;
  }
}
