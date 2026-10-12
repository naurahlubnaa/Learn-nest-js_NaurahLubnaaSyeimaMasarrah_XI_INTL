import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertMeterDTO} from './dto/convert-meters.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get('/length/:meters')
  convertMeters(@Param() params: ConvertMeterDTO){
    return this.convertService.convertMeters(params)
  }
}

