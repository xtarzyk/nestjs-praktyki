import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    get(@Request() req) {
        console.log(req)
        return {}
        // return this.userService.getAll()
    }

    @Get('/:name')
    getByName(@Param('name') name: string) {
        return this.userService.getByName(name)
    }

    @Post()
    post(@Body() body: { id: string, name: string, age: number }) {
        return this.userService.createNewUser(body.name, body.age)
    }

    @Patch()
    update(@Body() body: { name: string, age: number }) {
        return this.userService.updateUser(body.name, body.age)
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }
}
