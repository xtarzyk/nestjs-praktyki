import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addCat() {
    return {
      test: 123123,
    };
  }
}
