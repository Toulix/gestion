import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enseignement } from 'src/interface/enseignement.interface';

@Injectable()
export class EnseignementService {
    constructor(@InjectModel('Enseignement')
                 private readonly enseignementModel: Model<Enseignement>) {}

    async findAll() {
        return await this.enseignementModel.find().exec();
    }

    async getAllMatieresTaughtByEnseignant(idEnseignant) {
        return this.enseignementModel.find({ enseignant : idEnseignant})
    }
}
