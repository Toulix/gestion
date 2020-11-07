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
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({req}) => ({headers: req.headers}),
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      include: [InscriptionModule, UserModule, AnneeUniversitaireModule, AuthModule],
      installSubscriptionHandlers: true,
    }),
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
