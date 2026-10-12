import { Injectable } from '@nestjs/common';
import type { Vehicle } from './dto/parking-query.dto.js';

@Injectable()
export class ParkingService {
  calculateFee(hours: number, vehicle: Vehicle, weekend: boolean) {
    const rates: Record<Vehicle, number> = {
      motorcycle: 2000,
      car: 8000,
      bus: 15000,
    };

    const billedHours = Math.ceil(hours);
    const hourlyRate = rates[vehicle];
    const weekendSurcharge = weekend ? 0.2 : 0;

    const total = Math.round(
      billedHours * hourlyRate * (weekend ? 1.2 : 1),
    );

    return {
      hours,
      billedHours,
      vehicle,
      weekend,
      hourlyRate,
      weekendSurcharge,
      total,
    };
  }
}