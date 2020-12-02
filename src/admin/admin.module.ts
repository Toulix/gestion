import { AdminResolver } from './admin.resolver';
import { AdminSchema } from './../Model/admin';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminService } from './admin.service';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Admin', schema: AdminSchema}])],
  providers: [AdminService, AdminResolver]
})
export class AdminModule {}
