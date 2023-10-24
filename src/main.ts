import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { isProduction } from './utils';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: isProduction(),
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = configService.get<number>('APP_PORT');
  const MODE = configService.get<string>('NODE_ENV');

  await app.listen(PORT, () =>
    Logger.log(`Application is working on ${PORT} in ${MODE}`),
  );
}
bootstrap();
