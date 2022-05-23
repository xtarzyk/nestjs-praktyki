import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModuleModule } from './modules/first-module';
import { SecondModule } from './modules/second/second.module';
import { UserModule } from './modules/user';

@Module({
  imports: [FirstModuleModule, SecondModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
