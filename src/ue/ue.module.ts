import { UeSchema } from './../Model/ue';
import { Module } from '@nestjs/common';
import { UeService } from './ue.service';
import { UeController } from './ue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UeResolver } from './ue.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:'Ue', schema: UeSchema}])],
  providers: [UeService],
  controllers: [UeController]
})
export class UeModule {}
