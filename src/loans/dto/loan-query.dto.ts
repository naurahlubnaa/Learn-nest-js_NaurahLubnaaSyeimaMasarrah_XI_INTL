import { IsIn, IsOptional, IsString } from 'class-validator';

export class LoanQueryDto {
  @IsOptional()
  @IsString()
  @IsIn(['IDR', 'USD'])
  currency: string = 'IDR';
}