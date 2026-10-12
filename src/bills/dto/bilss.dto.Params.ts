import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class BillParamsDto {
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @Min(2)
  @Max(20)
  peopleCount: number;
}