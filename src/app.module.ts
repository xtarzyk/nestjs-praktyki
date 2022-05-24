import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorsModule } from './modules/colors';
import { UserModule } from './modules/user';

@Module({
  imports: [UserModule, ColorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
