import { ScolariteSchema } from './../Model/scolarite';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScolariteService } from './scolarite.service';
import { ScolariterResolver } from './scolarite.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:'Scolarite', schema: ScolariteSchema}])],
  providers: [ScolariteService, ScolariterResolver]
})
export class ScolariteModule {}
