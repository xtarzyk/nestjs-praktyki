import { Controller } from '@nestjs/common';
import { FirstModuleService } from './first-module.service';

@Controller('first')
export class FirstModuleController {
  constructor(
    private readonly firstModuleService: FirstModuleService
  ) {}

  get() {
    return this.firstModuleService.getHello();
  }
}
