import { jwtConstants } from './../../constant';
import { User } from './../interface/user.interface';
import { Model } from 'mongoose';
import { UserService } from './user.service';
import { Utilisateur } from './user.graphql.type';
import {  Query , Args, Mutation, Resolver, Parent, ResolveField, Context} from "@nestjs/graphql";
import { AuthenticationError } from 'apollo-server-express'
import { Logger, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user';
import { InjectModel } from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken'


@Resolver(of => Utilisateur)
export class UserResolver {
    private logger = new Logger(UserResolver.name);
    constructor(private userService: UserService,
                @InjectModel('User') private readonly userModel: Model<User>) {}

    @Query(returns => [Utilisateur], { name: 'users'})
    async getAllUsers() {
        return await this.userService.findAll();
    }

    
    @Query(returns => Utilisateur)
   //@Context('user') user: User
    async me(@CurrentUser() user: Utilisateur) {
        this.logger.log(user)
        try{
            return await this.userService.findById(user.id);
        } catch {
            throw  new Error('No user to show')
        }
       
    }

    @Mutation(returns => String)
    async singIn(@Args('username') username: string,
                 @Args('password') password : string ) {

        const user = await this.userModel.findOne({username: username});
        if(!user) {
            throw new AuthenticationError("L'utilisateur n'existe pas")
        }

        if(user.password != password) {
            throw new  AuthenticationError("Nom d'utilisateur ou mot de passe invalide")
        }

        return  await jwt.sign({ id: user.id, username: user.username }, jwtConstants.secret)
    }

    @Mutation(returns => Utilisateur)
    async createUser() {
        
    }
}