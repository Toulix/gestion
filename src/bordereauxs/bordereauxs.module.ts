import { EtudiantSchema } from './../Model/etudiant';
import { BordereauSchema } from './../Model/bordereau';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BordereauxsController } from './bordereauxs.controller';
import { BordereauxsService } from './bordereauxs.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name:'Bordereau', schema: BordereauSchema}])],
    controllers: [BordereauxsController],
    providers: [BordereauxsService]

})
export class BordereauxsModule {}
