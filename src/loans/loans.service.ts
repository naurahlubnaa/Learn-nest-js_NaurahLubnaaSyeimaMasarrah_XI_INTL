import { Injectable } from '@nestjs/common';

import { LoanBodyDto } from './dto/loan-body.dto.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';

@Injectable()
export class LoansService {
  calculateInstallment(
    params: LoanParamsDto,
    query: LoanQueryDto,
    body: LoanBodyDto,
  ) {
    const principal = params.principal;
    const months = body.months;
    const annualInterestRate = body.annualInterestRate;

    const r = annualInterestRate / 12 / 100;
    const n = months;

    let monthlyInstallment: number;

    if (r === 0) {
      monthlyInstallment = principal / months;
    } else {
      monthlyInstallment =
        (principal * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1);
    }

    monthlyInstallment = Math.round(monthlyInstallment);

    const totalPayment = monthlyInstallment * months;
    const totalInterest = totalPayment - principal;

    return {
      success: true,
      message: 'Installment calculated',
      data: {
        principal,
        currency: query.currency,
        months,
        annualInterestRate,
        monthlyInterestRate: r,
        monthlyInstallment,
        totalPayment,
        totalInterest,
      },
    };
  }
}