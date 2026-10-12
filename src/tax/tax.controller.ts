import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';

import { TaxService } from './tax.service.js';

import { TaxQueryDto } from './dto/tax.dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  calculateTax(@Query() query: TaxQueryDto) {
    const result = this.taxService.calculateTax(
      query.amount,
      query.rate,
      query.inclusive,
    );

    return {
      success: true,
      message: 'Tax calculated',
      data: result,
    };
  }
}