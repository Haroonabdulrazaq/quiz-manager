import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { createQuizDto } from '../dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  create(@Body() quiz: createQuizDto) {
    return this.quizService.createQuiz(quiz);
  }

  @Get()
  findAll() {
    return this.quizService.getAllQuiz();
  }

  @Get(':quizId')
  findById(@Param('quizId') quizId: number) {
    return this.quizService.getQuizById(quizId);
  }
}
