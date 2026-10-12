import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class LoanBodyDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(60)
  months: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(50)
  annualInterestRate: number;
}