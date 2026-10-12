import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
  MaxLength,
} from 'class-validator';

export class BillItemDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @Min(1)
  qty: number;
}