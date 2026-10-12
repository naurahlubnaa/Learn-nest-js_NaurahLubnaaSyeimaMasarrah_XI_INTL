import {
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';

import { ElectricityService } from './electricity.service.js';
import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Controller('bills')
export class ElectricityController {
  constructor(
    private readonly electricityService: ElectricityService,
  ) {}

  @Post('electricity')
  @HttpCode(200)
  calculateBill(@Body() body: ElectricityBillDto) {
    return this.electricityService.calculateBill(body);
  }
}