import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { ShippingService } from './shipping.service.js';
import { ShippingParamsDto } from './dto/shipping-params.dto.js';
import { ShippingQueryDto } from './dto/shipping-query.dto.js';
import { ShippingBodyDto } from './dto/shipping-body.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(
    private readonly shippingService: ShippingService,
  ) {}

  @Post(':city')
  @HttpCode(HttpStatus.OK)
  calculateCost(
    @Param() params: ShippingParamsDto,
    @Query() query: ShippingQueryDto,
    @Body() body: ShippingBodyDto,
  ) {
    return {
      success: true,
      message: 'Shipping cost calculated',
      data: this.shippingService.calculateCost(
        params.city,
        query.express,
        query.insurance,
        body,
      ),
    };
  }
}