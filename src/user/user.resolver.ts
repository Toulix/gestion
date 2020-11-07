import { GqlAuthGuard } from './../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { User } from './user.graphql.type';
import {  Query , Args, Mutation, Resolver, Parent, ResolveField, Context} from "@nestjs/graphql";
import { AuthenticationError } from 'apollo-server-express'
import { Logger, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user';



@Resolver(of => User)
export class UserResolver {
    private logger = new Logger(UserResolver.name);
    constructor(private userService: UserService) {}

    @Query(returns => [User], { name: 'users'})
    async getAllUsers() {
        return await this.userService.findAll();
    }

    
    @Query(returns => User)
    @UseGuards(new GqlAuthGuard())    
   //@Context('user') user: User
    async me(@CurrentUser() user: User) {
        this.logger.log(user)
        try{
            return await this.userService.findById(user._id);
        } catch {
            throw  new Error('No user to show')
        }
       
    }

    @Mutation(returns => String)
    async singIn(@Args('username') username: string,
                 @Args('password') password : string ) {

        const valideUser = await this.userService.validateUser(username, password);
        if(!valideUser) {
            throw new AuthenticationError("Nom d'utilisateur ou mot de passe invalide")
        }
        const token = await this.userService.generateJWT(valideUser);
        return token;
    }
}