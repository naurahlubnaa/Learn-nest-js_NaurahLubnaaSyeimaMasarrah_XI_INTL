import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { LoansService } from './loans.service.js';
import { LoanBodyDto } from './dto/loan-body.dto.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post(':principal/installment')
  @HttpCode(200)
  calculateInstallment(
    @Param() params: LoanParamsDto,
    @Query() query: LoanQueryDto,
    @Body() body: LoanBodyDto,
  ) {
    return this.loansService.calculateInstallment(params, query, body);
  }
}