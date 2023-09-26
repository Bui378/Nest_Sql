import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new RateLimitMiddleware());
  app.use(new LoggerMiddleware());

  await app.listen(3000);
}
bootstrap();
