import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CreateCheckoutDto } from './dto/create-checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('discount')
  calculateDiscount(
    @Query() query: CheckoutQueryDto,
    @Body() body: CreateCheckoutDto,
  ) {
    return this.checkoutService.calculateDiscount(query, body);
  }
}