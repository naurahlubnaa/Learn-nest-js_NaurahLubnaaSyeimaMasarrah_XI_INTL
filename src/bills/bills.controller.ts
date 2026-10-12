import { Body, Controller, Param, Post,} from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { BillParamsDto } from './dto/bilss.dto.Params.js';
import { BillBodyDto } from './dto/bills.dto.Body.js';

@Controller('bills')
export class BillsController {
  constructor(
    private readonly billsService: BillsService,
  ) {}

  @Post(':peopleCount/split')
  splitBill(
    @Param() params: BillParamsDto,
    @Body() body: BillBodyDto,
  ) {
    const result = this.billsService.splitBill(
      params.peopleCount,
      body.items,
      body.tipPercent,
    );

    return {
      success: true,
      message: 'Bill split',
      data: result,
    };
  }
}