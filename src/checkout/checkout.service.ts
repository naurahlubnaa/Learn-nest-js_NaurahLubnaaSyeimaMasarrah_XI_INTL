import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CreateCheckoutDto } from './dto/create-checkout.dto.js';

@Injectable()
export class CheckoutService {
  calculateDiscount(
    query: CheckoutQueryDto,
    body: CreateCheckoutDto,
  ) {
    const subtotal = body.items.reduce(
      (total, item) => total + item.price * item.qty,
      0,
    );

    const memberDiscount = query.member ? subtotal * 0.05 : 0;

    let couponDiscount = 0;

    if (query.coupon === 'HEMAT10') {
      couponDiscount = subtotal * 0.1;
    } else if (query.coupon === 'HEMAT20') {
      couponDiscount = subtotal * 0.2;
    } else if (query.coupon === 'FREESHIP') {
      couponDiscount = 0;
    } else if (query.coupon) {
      throw new NotFoundException('Coupon not found');
    }

    const totalDiscount = memberDiscount + couponDiscount;
    const grandTotal = subtotal - totalDiscount;

    return {
      success: true,
      message: 'Checkout calculated',
      data: {
        subtotal,
        member: query.member,
        coupon: query.coupon ?? null,
        discounts: {
          member: memberDiscount,
          coupon: couponDiscount,
          total: totalDiscount,
        },
        grandTotal,
      },
    };
  }
}