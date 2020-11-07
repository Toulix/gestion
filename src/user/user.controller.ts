
import { UserDTO } from './../dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
                ) {}

    //juste oe anovana essai @ postman fa graphQl no migérer n singUp
    @Post()
    async createUser(@Body() userDTO: UserDTO) {
        return await this.userService.create(userDTO);
    }

    @Get() 
    async getUsernameAndPassword() {
        
    }
}
