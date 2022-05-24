import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user-old.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    get() {
        return this.userService.getAll()
    }

    @Get('/:name')
    getByName(@Param('name') name: string) {
        return this.userService.getByName(name)
    }

    @Post()
    post(@Body() body: CreateUserDto) {
        return this.userService.createNewUser(body.name, body.age)
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() body: EditUserDto) {
        return this.userService.updateUser(id, body.name, body.age)
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }
}
