import { EtudiantSchema } from './../Model/etudiant';
import { EnseignantResolver } from './enseignant.resolver';
import { EnseignantSchema } from './../Model/enseignant';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnseignantService } from './enseignant.service';

const schema =[
  { name:'Enseignant', schema: EnseignantSchema},
  //{ name:'Etudiant', schema: EtudiantSchema},
]

@Module({
  imports: [MongooseModule.forFeature(schema)],
  providers: [EnseignantService, EnseignantResolver]
})
export class EnseignantModule {}
