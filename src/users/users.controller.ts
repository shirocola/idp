import { UsersService } from './users.service';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    create(@Body() user: User) {
        return this.userService.create(user)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id)
    }
}
