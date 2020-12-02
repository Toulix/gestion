import { RolesGuard } from './roles.guard';
import { UserSchema } from './../Model/user';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{ name:'User', schema: UserSchema}])],
  providers: [AuthService, RolesGuard],
  exports: [AuthService]
})
export class AuthModule {}
