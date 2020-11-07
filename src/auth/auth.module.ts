import { jwtConstants } from './../../constant';
import { UserSchema } from './../Model/user';
import { GqlAuthGuard } from './jwt-auth.guard';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forFeature([{ name:'User', schema: UserSchema}])],
  providers: [AuthService, GqlAuthGuard],
  exports: [AuthService]
})
export class AuthModule {}
