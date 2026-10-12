import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

import { MeterDto } from './meter.dto.js';
import { RatesDto } from './rates.dto.js';

export class ElectricityBillDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 80)
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDto)
  meter: MeterDto;

  @ValidateNested()
  @Type(() => RatesDto)
  rates: RatesDto;
}