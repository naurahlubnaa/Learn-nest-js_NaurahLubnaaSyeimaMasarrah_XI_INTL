import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ShippingBodyDto } from './dto/shipping-body.dto.js';

@Injectable()
export class ShippingService {
  calculateCost(
    city: string,
    express: boolean,
    insurance: boolean,
    body: ShippingBodyDto,
  ) {
    const baseFares: Record<string, number> = {
      jakarta: 9000,
      bandung: 12000,
      surabaya: 15000,
      medan: 18000,
      denpasar: 20000,
    };

    const baseFare = baseFares[city];

    if (baseFare === undefined) {
      throw new NotFoundException('Unsupported destination city');
    }

    const { weightKg, dimension } = body;

    const volumetricKg =
      (dimension.lengthCm *
        dimension.widthCm *
        dimension.heightCm) /
      5000;

    const chargeableKg = Math.max(weightKg, volumetricKg);

    // Setiap kilogram yang dimulai di atas 1 kg dikenai Rp2.000.
    const extraKg = Math.max(0, Math.ceil(chargeableKg) - 1);
    const weightExtra = extraKg * 2000;

    const subtotal = baseFare + weightExtra;
    const expressFee = express ? subtotal * 0.5 : 0;
    const insuranceFee = insurance
      ? Math.ceil(chargeableKg) * 1000
      : 0;

    const total = subtotal + expressFee + insuranceFee;

    return {
      city,
      express,
      insurance,
      weightKg,
      volumetricKg: Math.round(volumetricKg * 10) / 10,
      chargeableKg,
      baseFare,
      expressFee,
      insuranceFee,
      total,
    };
  }
}