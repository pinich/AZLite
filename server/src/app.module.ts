import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.env.PWD, process.env.CLIENT_PATH),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
