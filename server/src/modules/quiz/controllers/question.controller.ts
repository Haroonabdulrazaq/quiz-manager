import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}
  @Post()
  async createQuestion(@Body() question: createQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);

    return await this.questionService.create(question, quiz);
  }

  @Get()
  getAll() {
    return 'return all quiestions';
  }

  @Get(':questionId')
  async getQuestionById(@Param('questionId') questionId: number) {
    const response = await this.questionService.findQuestionById(questionId);
    return response;
  }
}
