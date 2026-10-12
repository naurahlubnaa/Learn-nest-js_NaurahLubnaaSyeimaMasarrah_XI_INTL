import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureParamDto } from './dto/dto-tmpr.Params.js';
import { TemperatureQueryDto } from './dto/dto-tmpr.Query.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get(':value')
  convertTemperature(
    @Param() params: TemperatureParamDto,
    @Query() query: TemperatureQueryDto,
  ) {
    return this.temperatureService.convertTemperature(params, query);
  }
}