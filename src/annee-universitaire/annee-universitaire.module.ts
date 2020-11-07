import { PromotionResolver } from './annee-universitaire.resolver';
import { PromotionSchema } from './../Model/promotion';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnneeUniversitaireController } from './annee-universitaire.controller';
import { AnneeUniversitaireService } from './annee-universitaire.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Promotion', schema: PromotionSchema}])],
  controllers: [AnneeUniversitaireController],
  providers: [AnneeUniversitaireService, PromotionResolver]
})
export class AnneeUniversitaireModule {}
