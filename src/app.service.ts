import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHola(): string {
    return 'Hola mundo';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
