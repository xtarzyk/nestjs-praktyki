import { Module } from '@nestjs/common';
import { UserController } from './user-old.controller';
import { UserService } from './user-old.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
