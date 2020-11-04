import { ParcoursSchema } from './../Model/parcours';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParcoursController } from './parcours.controller';
import { ParcoursService } from './parcours.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Parcour', schema: ParcoursSchema}])],
  controllers: [ParcoursController],
  providers: [ParcoursService]
})
export class ParcoursModule {}
