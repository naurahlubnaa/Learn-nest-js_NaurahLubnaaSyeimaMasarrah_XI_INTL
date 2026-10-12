import { Injectable } from '@nestjs/common';
import { BillItemDto } from './dto/bilss.dto.Item.js';

@Injectable()
export class BillsService {
  splitBill(
    peopleCount: number,
    items: BillItemDto[],
    tipPercent: number,
  ) {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );

    const tip = subtotal * tipPercent / 100;

    const total = subtotal + tip;

    const perPerson = Math.round(total / peopleCount);

    return {
      peopleCount,
      subtotal,
      tipPercent,
      tip,
      total,
      perPerson,
    };
  }
}