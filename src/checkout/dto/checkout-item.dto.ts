import { IsInt, IsNumber, IsString, Min, Length } from 'class-validator';

export class CheckoutItemDto {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(1)
  qty: number;
}