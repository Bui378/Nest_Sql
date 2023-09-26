import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('scores')
export class ScoresController {
  constructor(private scoresService: ScoresService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createScore(@Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(createScoreDto);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.scoresService.getLeaderboard();
  }
}
