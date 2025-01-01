import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class createOptionDto {
  @IsNotEmpty({ message: 'Option cannot not be empty' })
  @Length(3, 255)
  text: string;

  @IsOptional()
  isCorrect: boolean;

  @IsNotEmpty()
  @IsOptional()
  questionId: number;
}
