import { MatiereSchema } from './../Model/matiere';
import { EnseignantSchema } from './../Model/enseignant';
import { NiveauSchema } from './../Model/niveau';
import { EtudiantSchema } from './../Model/etudiant';
import { PromotionSchema } from './../Model/promotion';
import { ReclamationSchema } from './../Model/reclamation';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReclamationService } from './reclamation.service';
import { ReclamationResolver } from './reclamation.resolver';
import { AnneeUniversitaireService } from 'src/annee-universitaire/annee-universitaire.service';
import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { NiveauService } from 'src/niveau/niveau.service';
import { ParcoursService } from 'src/parcours/parcours.service';
import { EnseignantService } from 'src/enseignant/enseignant.service';
import { MatiereService } from 'src/matiere/matiere.service';
import { ParcoursSchema } from 'src/Model/parcours';

const schema = [
  { name:'Reclamation', schema: ReclamationSchema},
  { name:'Promotion', schema: PromotionSchema},
  { name:'Etudiant', schema: EtudiantSchema},
  { name:'Niveau', schema: NiveauSchema},
  { name:'Parcour', schema: ParcoursSchema},
  { name:'Enseignant', schema: EnseignantSchema},
  { name:'Matiere', schema: MatiereSchema},
]


@Module({
  imports: [
    MongooseModule.forFeature(schema)],
  providers: [ReclamationService,
              ReclamationResolver,
              AnneeUniversitaireService,
              EtudiantsService,
              NiveauService,
              ParcoursService,
              EnseignantService,
              MatiereService

  ]
})
export class ReclamationModule {}