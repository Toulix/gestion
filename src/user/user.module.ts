import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { EnseignantService } from 'src/enseignant/enseignant.service';
import { ScolariteService } from './../scolarite/scolarite.service';
import { AdminSchema } from './../Model/admin';
import { ScolariteSchema } from './../Model/scolarite';
import { EnseignantSchema } from './../Model/enseignant';
import { EtudiantSchema } from './../Model/etudiant';

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

const schema = [
  { name:'User', schema: UserSchema},
  { name: 'Etudiant', schema: EtudiantSchema },
  { name: 'Enseignant', schema: EnseignantSchema},
  { name: 'Scolarite', schema: ScolariteSchema},
  { name: 'Admin', schema: AdminSchema}
]

@Module({
  imports: [
  MongooseModule.forFeature(schema)],
  controllers: [UserController],
  providers: [UserService, UserResolver, ScolariteService, EnseignantService, EtudiantsService ],
  exports: [UserService]
})
export class UserModule {}
