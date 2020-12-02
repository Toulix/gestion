import { MatiereResolver } from './matiere.resolver';
import { MatiereSchema } from './../Model/matiere';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatiereService } from './matiere.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Matiere', schema: MatiereSchema}])],
  providers: [MatiereService, MatiereResolver]
})
export class MatiereModule {}
