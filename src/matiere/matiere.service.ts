import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Matiere } from 'src/interface/matiere.interface';

@Injectable()
export class MatiereService {
    constructor(@InjectModel('Matiere')
    private readonly matiereModel: Model<Matiere>) {}

    async findAll() {
        return await this.matiereModel.find().exec();
    }

    async findById(idMatiere) {
        return await this.matiereModel.findById(idMatiere).exec();
    }

    async createOne(libelle, abbreviation) {
        const newMatiere = new this.matiereModel({
            libelle,
            abbreviation
        })
        return await newMatiere.save();
    }

    async deleteOne(idMatiere) {
        try {
            await this.matiereModel.findOneAndRemove({_id: idMatiere})
            return true;
        } catch (error) {
            return false;
        }
    }

}
