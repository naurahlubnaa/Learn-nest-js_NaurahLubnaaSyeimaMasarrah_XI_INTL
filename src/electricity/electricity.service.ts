import { BadRequestException, Injectable } from '@nestjs/common';

import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Injectable()
export class ElectricityService {
  calculateBill(body: ElectricityBillDto) {
    const { customerName, meter, rates } = body;

    if (meter.currentKwh <= meter.previousKwh) {
      throw new BadRequestException(
        'currentKwh must be greater than previousKwh',
      );
    }

    const usageKwh = meter.currentKwh - meter.previousKwh;
    const usageFee = usageKwh * rates.perKwh;
    const subtotal = rates.baseFee + usageFee;
    const tax = subtotal * rates.taxRate / 100;
    const total = subtotal + tax;

    return {
      success: true,
      message: 'Electricity bill calculated',
      data: {
        customerName,
        usageKwh,
        baseFee: rates.baseFee,
        usageFee,
        subtotal,
        taxRate: rates.taxRate,
        tax,
        total,
      },
    };
  }
}