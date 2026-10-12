import { BadRequestException, Injectable } from '@nestjs/common';
import { TemperatureParamDto } from './dto/dto-tmpr.Params.js';
import { TemperatureQueryDto } from './dto/dto-tmpr.Query.js';

@Injectable()
export class TemperatureService {
  convertTemperature(
    params: TemperatureParamDto,
    query: TemperatureQueryDto,
  ) {
    const { value } = params;
    const { from, to } = query;

    if (from === to) {
      throw new BadRequestException(
        'Source and target units must be different',
      );
    }

    let celsius: number;

    // Convert source unit to Celsius
    if (from === 'C') {
      celsius = value;
    } else if (from === 'F') {
      celsius = (value - 32) * (5 / 9);
    } else {
      celsius = value - 273.15;
    }

    // Convert Celsius to target unit
    let result: number;

    if (to === 'C') {
      result = celsius;
    } else if (to === 'F') {
      result = celsius * (9 / 5) + 32;
    } else {
      result = celsius + 273.15;
    }

    result = Math.round(result * 100) / 100;

    return {
      success: true,
      message: 'Temperature converted',
      data: {
        value,
        from,
        to,
        result,
      },
    };
  }
}