import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoresService {
  calculateAverage(
    scores: number[],
    passMark: number,
  ) {
    const count = scores.length;

    const total = scores.reduce(
      (sum, score) => sum + score,
      0,
    );

    const average = Number((total / count).toFixed(1));
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const passed = scores.filter(
      (score) => score >= passMark,
    ).length;

    const failed = scores.filter(
      (score) => score < passMark,
    ).length;

    return {
      count,
      average,
      highest,
      lowest,
      passMark,
      passed,
      failed,
    };
  }
}