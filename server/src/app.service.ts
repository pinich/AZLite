import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { msg: 'Hello World', date: new Date().toISOString() };
  }
}
