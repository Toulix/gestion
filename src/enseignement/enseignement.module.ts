import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { AnneeUniversitaireService } from 'src/annee-universitaire/annee-universitaire.service';
import { EnseignantService } from 'src/enseignant/enseignant.service';
import { MatiereService } from 'src/matiere/matiere.service';
import { EnseignantSchema } from 'src/Model/enseignant';
import { EnseignementSchema } from 'src/Model/enseignement';
import { EtudiantSchema } from 'src/Model/etudiant';
import { MatiereSchema } from 'src/Model/matiere';
import { NiveauSchema } from 'src/Model/niveau';
import { ParcoursSchema } from 'src/Model/parcours';
import { PromotionSchema } from 'src/Model/promotion';
import { ReclamationSchema } from 'src/Model/reclamation';
import { NiveauService } from 'src/niveau/niveau.service';
import { ParcoursService } from 'src/parcours/parcours.service';
import { EnseignementResolver } from './enseignement.resolver';
import { EnseignementService } from './enseignement.service';


const schema = [
  { name: 'Enseignement', schema: EnseignementSchema},
  { name:'Reclamation', schema: ReclamationSchema},
  { name:'Promotion', schema: PromotionSchema},
  { name:'Etudiant', schema: EtudiantSchema},
  { name:'Niveau', schema: NiveauSchema},
  { name:'Parcour', schema: ParcoursSchema},
  { name:'Enseignant', schema: EnseignantSchema},
  { name:'Matiere', schema: MatiereSchema},
]
@Module({
  imports: [MongooseModule.forFeature(schema)],
  providers: [EnseignementService, 
              EnseignementResolver,
              EnseignantService,
              AnneeUniversitaireService,
              MatiereService,
              NiveauService,
              ParcoursService
            ]
})
export class EnseignementModule {}