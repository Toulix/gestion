import { NiveauSchema } from './../Model/niveau';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NiveauController } from './niveau.controller';
import { NiveauService } from './niveau.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Niveau', schema: NiveauSchema}])],
  controllers: [NiveauController],
  providers: [NiveauService]
})
export class NiveauModule {}
