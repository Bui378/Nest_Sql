import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoresRepository: Repository<Score>,
  ) {}

  async create(createScoreDto: CreateScoreDto) {
    const score = this.scoresRepository.create(createScoreDto);
    return this.scoresRepository.save(score);
  }

  async getLeaderboard() {
    return this.scoresRepository.find({
      order: { score: 'DESC' },
      take: 10,
    });
  }
}
