import { Type } from 'class-transformer';
import {
  IsNumber,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

import { ShippingDimensionDto } from './shipping-dimension.dto.js';

export class ShippingBodyDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.1)
  @Max(30)
  weightKg: number;

  @ValidateNested()
  @Type(() => ShippingDimensionDto)
  dimension: ShippingDimensionDto;
}