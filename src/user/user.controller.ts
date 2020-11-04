import { UserDTO } from './../dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    //juste oe anovana essai @ postman fa graphQl no migérer n singUp
    @Post()
    async createUser(@Body() userDTO: UserDTO) {
        return await this.userService.create(userDTO);
    }
}
