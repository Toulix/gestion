import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EtudiantSchema } from './Model/etudiant';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { ImagesController } from './images/images.controller';
import { InscriptionModule } from './inscription/inscription.module';
import { MongooseModule } from '@nestjs/mongoose'
import { BordereauxsController } from './bordereauxs/bordereauxs.controller';
import { BordereauxsModule } from './bordereauxs/bordereauxs.module';
import { NiveauModule } from './niveau/niveau.module';
import { ParcoursModule } from './parcours/parcours.module';
import { AnneeUniversitaireModule } from './annee-universitaire/annee-universitaire.module';


@Module({
  imports: [
    UserModule,
    AuthModule,
    EtudiantsModule,
    InscriptionModule,
    BordereauxsModule,
    NiveauModule,
    ParcoursModule,
    AnneeUniversitaireModule,
    MongooseModule.forRoot('mongodb://localhost:27017/gestion'),
    ],
  controllers: [AppController, ImagesController, BordereauxsController],
  providers: [AppService],
})
export class AppModule {}
