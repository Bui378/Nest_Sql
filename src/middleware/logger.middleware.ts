import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import fs from 'fs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = morgan('common', {
    stream: fs.createWriteStream('access.log', { flags: 'a' }),
  });

  use(req: Request, res: Response, next: NextFunction) {
    this.logger(req, res, next);
  }
}
