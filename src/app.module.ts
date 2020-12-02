
import { jwtConstants } from './../constant';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
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
import { EnseignantModule } from './enseignant/enseignant.module';
import { ScolariteModule } from './scolarite/scolarite.module';
import { AdminModule } from './admin/admin.module';
import { ReclamationModule } from './reclamation/reclamation.module';
import { NotesModule } from './notes/notes.module';
import { MatiereModule } from './matiere/matiere.module';
import { EnseignementModule } from './enseignement/enseignement.module';
import * as jwt from 'jsonwebtoken'

const getUser = token => {
  if (token) {
  try {
  // return the user information from the token
  return jwt.verify(token, jwtConstants.secret);
  } catch (err) {
  // if there's a problem with the token, throw an error
  throw new Error('Session invalid');
  }
  }
 };
 
@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({req}) => {
        // get the user token from the headers
        const token = req.headers.authorization;
        // try to retrieve a user with the token
        const user = getUser(token);
        // for now, let's log the user to the console:
        console.log(user);
        // add the user to the context
        return { user };
        },
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: false,
      include: [
        AdminModule,
        InscriptionModule,
        UserModule,
        AnneeUniversitaireModule,
        AuthModule,
        EtudiantsModule,    
        ScolariteModule,
        EnseignantModule,
        EnseignementModule,
        MatiereModule,
        NotesModule,
        ReclamationModule],
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
    EnseignantModule,
    ScolariteModule,
    AdminModule,
    ReclamationModule,
    NotesModule,
    MatiereModule,
    EnseignementModule,
    ],
  controllers: [AppController, ImagesController, BordereauxsController],
  providers: [AppService],
})
export class AppModule {}
