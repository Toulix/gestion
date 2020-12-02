import { NoteResolver } from './notes.resolver';
import { NoteSchema } from './../Model/note';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesService } from './notes.service';
import { MatiereService } from 'src/matiere/matiere.service';
import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { AnneeUniversitaireService } from 'src/annee-universitaire/annee-universitaire.service';
import { ParcoursService } from 'src/parcours/parcours.service';
import { NiveauService } from 'src/niveau/niveau.service';
import { PromotionSchema } from 'src/Model/promotion';
import { EtudiantSchema } from 'src/Model/etudiant';
import { NiveauSchema } from 'src/Model/niveau';
import { ParcoursSchema } from 'src/Model/parcours';
import { EnseignantSchema } from 'src/Model/enseignant';
import { MatiereSchema } from 'src/Model/matiere';

const schema =  [
  { name:'Note', schema: NoteSchema},
  { name:'Promotion', schema: PromotionSchema},
  { name:'Etudiant', schema: EtudiantSchema},
  { name:'Niveau', schema: NiveauSchema},
  { name:'Parcour', schema: ParcoursSchema},
  { name:'Matiere', schema: MatiereSchema},
  ]

@Module({
  imports: [MongooseModule.forFeature(schema)],
  providers: [NotesService,
              NoteResolver,
              NiveauService,
              ParcoursService,
              AnneeUniversitaireService,
              EtudiantsService,
              MatiereService
            ]
})
export class NotesModule {}