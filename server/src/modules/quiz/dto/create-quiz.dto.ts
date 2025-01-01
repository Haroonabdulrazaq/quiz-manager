import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';

export class createQuizDto {
  @IsNotEmpty({ message: 'quiz title should not be empty' })
  @Length(3, 255)
  title: string;

  @IsOptional()
  @Length(3)
  description: string;
}

export class QuizIdParamDto {
  @IsInt()
  @Min(1)
  quizId: number;
}
