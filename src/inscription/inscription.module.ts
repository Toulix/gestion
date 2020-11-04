import { InscriptionSchema } from './../Model/inscription';
import { ParcoursSchema } from './../Model/parcours';
import { NiveauSchema } from './../Model/niveau';
import { ParcoursService } from './../parcours/parcours.service';
import { NiveauService } from './../niveau/niveau.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { PromotionSchema } from './../Model/promotion';
import { BordereauxsService } from './../bordereauxs/bordereauxs.service';
import { BordereauSchema } from './../Model/bordereau';
import { Module } from '@nestjs/common';
import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { InscriptionController } from './inscription.controller';
import { InscriptionService } from './inscription.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { EtudiantSchema } from './../Model/etudiant';
import { UserSchema } from './../Model/user'

const schemas = [
  { name: 'Inscription', schema: InscriptionSchema },
  { name: 'Etudiant', schema: EtudiantSchema },
  { name: 'Bordereau', schema: BordereauSchema },
  { name: 'Promotion', schema: PromotionSchema },
  { name: 'Niveau', schema: NiveauSchema },
  { name: 'Parcour', schema: ParcoursSchema }
]

@Module({
  imports: [MongooseModule.forFeature(schemas)],
  controllers: [InscriptionController],
  providers: [
    InscriptionService,
    EtudiantsService,
    BordereauxsService,
    AnneeUniversitaireService,
    NiveauService,
    ParcoursService
  ]
})
export class InscriptionModule { }
