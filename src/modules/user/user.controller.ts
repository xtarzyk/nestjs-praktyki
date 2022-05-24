import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAll()
    }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id)
    }

    @Post()
    createNewUser(@Body() body: CreateUserDto) {
        return this.userService.createNewUser(body.firstName, body.lastName, body.yearOfBirth, body.favouriteColors)
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: EditUserDto) {
        return this.userService.updateUser(id, body.firstName, body.lastName, body.yearOfBirth, body.favouriteColors)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }
}
