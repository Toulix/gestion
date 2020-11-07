import { jwtConstants } from './../../constant';

import { User } from './../interface/user.interface';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken'


@Injectable()
export class UserService {
    private logger = new Logger(UserService.name);
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  
   async findOne(username: string): Promise<User | undefined> {
       return await this.userModel.findOne({ username : username})
   }

   async findById(userId) {
       return await this.userModel.findById(userId);
   }

   async findAll() {
    return await this.userModel.find();
   }

   async validateUser(username, password) {
        const user = await this.userModel.findOne({username: username});
        if(user && user.password === password) {
            const { password, ...result } = user;
            
            return result;
        }
        return null;
   }

   async generateJWT(user) {
        return  await jwt.sign({ id: user.id, username: user.username, roles: user.roles },
             jwtConstants.secret)
    }
   
   async create(user) {
       const newUser = new this.userModel(user);
       return await newUser.save();
   }
}

