import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../entities/option.entity';
import { createOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}

  async create(payload: createOptionDto, question: Question) {
    const newOption = await this.optionRepository.save(payload);
    question.options = [...question.options, newOption];

    question.save();

    return {
      message: 'Option created successfully',
      data: newOption,
    };
  }
}
