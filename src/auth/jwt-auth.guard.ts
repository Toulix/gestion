import { jwtConstants } from './../../constant';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationError } from 'apollo-server-express';
import { CanActivate, ExecutionContext, HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken'

@Injectable() 
export class GqlAuthGuard implements CanActivate {
    private logger = new Logger(GqlAuthGuard.name);
   async canActivate(context: ExecutionContext) {
      const ctx = GqlExecutionContext.create(context).getContext();
       if(!ctx.headers.authorization) {
           return false;
       }
       ctx.user = await this.validateToken(ctx.headers.authorization)
        return true;
    }

    async validateToken(auth: string) {
        if(auth.split(' ')[0] !== "Bearer") {
            throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED)
        }
        const token = auth.split(' ')[1];

        try {
            return await jwt.verify(token, jwtConstants.secret)
        } catch(err) {
            throw new HttpException("Session invalid", HttpStatus.UNAUTHORIZED)
        }
    }
   
}