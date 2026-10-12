import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class TemperatureQueryDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['C', 'F', 'K'])
  from: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['C', 'F', 'K'])
  to: string;
}