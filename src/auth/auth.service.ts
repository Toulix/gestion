import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService){}
    //later we will compare the hashed password in the database 
    //with the incomming
    async validateUser(username: string, password:string) {
        const user = await this.userService.findOne(username);
        if(user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async generateJWT(user: any) {
        const payload = { id: user.id, username: user.username, roles: user.roles }
        return {
            access_token : await this.jwtService.sign(payload)
        } 
    }
}
