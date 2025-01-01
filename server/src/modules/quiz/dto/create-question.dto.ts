import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class createQuestionDto {
  @IsNotEmpty({ message: 'question cannot not be empty' })
  @Length(3, 255)
  question: string;

  @IsOptional()
  answer: string;

  @IsNotEmpty()
  quizId: number;
}
