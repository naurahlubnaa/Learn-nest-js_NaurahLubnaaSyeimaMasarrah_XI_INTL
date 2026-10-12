import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { ScoresService } from './scores.service.js';
import { ScoreAverageDto } from './dto/scores.dto.js';

@Controller('scores')
export class ScoresController {
  constructor(
    private readonly scoresService: ScoresService,
  ) {}

  @Post('average')
  calculateAverage(
    @Body() body: ScoreAverageDto,
  ) {
    const result = this.scoresService.calculateAverage(
      body.scores,
      body.passMark,
    );

    return {
      success: true,
      message: 'Score summary calculated',
      data: result,
    };
  }
}