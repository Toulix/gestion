import { Utilisateur } from './../user/user.graphql.type';
import { CurrentUser } from '../user/current-user';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from '@nestjs/core';
import { ForbiddenError } from 'apollo-server-express'


@Injectable()
export class RolesGuard implements CanActivate {
    //In order to acces the route's role(s) custom metadata
    //we use reflector
   // @CurrentUser() private user :Utilisateur
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       // throw new Error("Method not implemented.");
        const roles = this.reflector.get<string[]>('roles', context.getHandler())
        // if(roles.includes(this.user.roles)){
        //     return true;
        // } else {
        //     throw new ForbiddenError("Vous n'avez pas la permission d'effectuer cette opération")
        // }
        return true;
    }
}