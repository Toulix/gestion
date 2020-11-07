
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { PromotionSchema } from './../Model/promotion';
import { InscriptionSchema } from './../Model/inscription';
import { InscriptionService } from './../inscription/inscription.service';
import { jwtConstants } from './../../constant';
import { AuthService } from './../auth/auth.service';
import { UserResolver } from './user.resolver';
import { UserSchema } from './../Model/user';
import { Module , forwardRef} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
  MongooseModule.forFeature([{ name:'User', schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
