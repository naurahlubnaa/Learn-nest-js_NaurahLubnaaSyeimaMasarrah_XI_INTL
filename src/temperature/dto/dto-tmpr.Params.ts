import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class TemperatureParamDto {
  @Type(() => Number)
  @IsNumber()
  @Min(-273.15)
  @Max(1000)
  value: number;
}