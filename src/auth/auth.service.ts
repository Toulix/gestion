
import { UserService } from './../user/user.service';

import { Inject, Injectable, forwardRef, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interface/user.interface';


@Injectable()
export class AuthService {
    private logger = new Logger(AuthService.name)
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
        ){}
    
    async validateUser(payload) {
        this.logger.log(payload);
            const user = await this.userModel.findOne({ username : payload.username});
            this.logger.log('fetched user:' + user )
          //  if(user && user.password === payload.password) {
            if(user) {
                const { password, ...result } = user;
                return result;
            }
            return null;
       } 

       
    }

    // async generateJWT(user) {
    //     const payload = { id: user.id, username: user.username, roles: user.roles }
    //     return  {
    //         access_token :  this.jwtService.sign(payload)
    //     } 
    // }