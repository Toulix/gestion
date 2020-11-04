import { UserModule } from './../user/user.module';
import { jwtConstants } from './../../constant';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports : [
    UserModule,
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn : '1h'}
  })],
  providers: [AuthService]
})
export class AuthModule {}
