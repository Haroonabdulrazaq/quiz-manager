import { Body, Controller, Post } from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { createOptionDto } from '../dto/create-option.dto';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  async create(@Body() payload: createOptionDto) {
    const question = await this.questionService.findQuestionById(
      payload.questionId,
    );

    const response = await this.optionService.create(payload, question);
    return response;
  }
}
