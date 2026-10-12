import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class RatesDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  baseFee: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  perKwh: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(20)
  taxRate: number = 11;
}