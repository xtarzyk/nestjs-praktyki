import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { SecondService } from "./second.service";

@Controller('second')
export class SecondController {
    constructor(private readonly secondService: SecondService) {}

    @Get()
    get() {
        return this.secondService.getSecondHello()
    }

    @Post()
    post() {
        return this.secondService.postMessages()
    }

    @Patch()
    update() {
        return this.secondService.updateFirstMessage()
    }

    @Delete()
    delete() {
        return this.secondService.deleteAll()
    }
}