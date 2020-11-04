import { User } from './../interface/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  
    async findOne(username: string): Promise<User | undefined> {
       return await this.userModel.findOne({ username : username})
   }
   
   async create(user) {
       const newUser = new this.userModel(user);
       return await newUser.save();
   }
}

