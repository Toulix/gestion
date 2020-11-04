import { EtudiantSchema } from './../Model/etudiant';
import { Module } from '@nestjs/common';
import { EtudiantsController } from './etudiants.controller';
import { EtudiantsService } from './etudiants.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Etudiant', schema: EtudiantSchema}])],
  controllers: [EtudiantsController],
  providers: [EtudiantsService]
})
export class EtudiantsModule {}
