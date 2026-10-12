import { Injectable } from '@nestjs/common';

@Injectable()
export class TaxService {
  calculateTax(
    amount: number,
    rate: number,
    inclusive: boolean,
  ) {
    let tax: number;
    let net: number;
    let gross: number;

    if (inclusive) {
      gross = amount;
      tax = amount * rate / (100 + rate);
      net = amount - tax;
    } else {
      tax = amount * rate / 100;
      net = amount;
      gross = amount + tax;
    }

    return {
      amount,
      rate,
      inclusive,
      tax,
      net,
      gross,
    };
  }
}