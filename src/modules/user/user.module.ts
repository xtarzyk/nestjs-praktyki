import { Module } from '@nestjs/common';
import { ColorsModule } from '../colors';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ColorsModule]
})
export class UserModule {}
