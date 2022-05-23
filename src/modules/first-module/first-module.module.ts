import { Module } from "@nestjs/common";
import { FirstModuleController } from "./first-module.controller";
import { FirstModuleService } from "./first-module.service";

@Module({
    controllers: [FirstModuleController],
    providers: [FirstModuleService]
})
export class FirstModuleModule {}
