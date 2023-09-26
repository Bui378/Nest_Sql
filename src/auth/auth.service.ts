import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async validateUser(payload: any) {
    const user = await this.userRepository.findOneBy({ email: payload.email });
    if (!user) return null;
    return user;
  }
}
