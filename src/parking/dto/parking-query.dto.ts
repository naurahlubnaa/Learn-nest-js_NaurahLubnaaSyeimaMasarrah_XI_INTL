import { Type } from 'class-transformer';
import { IsBoolean, IsIn, IsOptional } from 'class-validator';

export type Vehicle = 'car' | 'motorcycle' | 'bus';

export class QueryDto {
  @IsIn(['car', 'motorcycle', 'bus'])
  vehicle: Vehicle;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  weekend: boolean = false;
}