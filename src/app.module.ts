import { jwtConstants } from './../constant';
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
