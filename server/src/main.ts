import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: join(process.env.PWD, '../../.env') });

import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by'); // Remove express from response headers

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  Logger.log(
    `🟢 Listening on port ${port}, BUILD_TYPE=${process.env.BUILD_TYPE}`,
    'Main',
  );

  await app.listen(port);
}
bootstrap();
