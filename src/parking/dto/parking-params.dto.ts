import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class ParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.5)
  @Max(24)
  hours: number;
}