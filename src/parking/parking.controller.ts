import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParamsDto } from './dto/parking-params.dto.js';
import { QueryDto } from './dto/parking-query.dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get(':hours')
  calculateFee(
    @Param() params: ParamsDto,
    @Query() query: QueryDto,
  ) {
    return {
      success: true,
      message: 'Parking fee calculated',
      data: this.parkingService.calculateFee(
        params.hours,
        query.vehicle,
        query.weekend ?? false,
      ),
    };
  }
}