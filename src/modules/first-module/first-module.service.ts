import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstModuleService {
  getHello(): string {
    return 'Hello World!';
  }
}
