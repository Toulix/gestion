import { UpdateEnseignantInput } from './enseignant.input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enseignant } from 'src/interface/enseignant.interface';

@Injectable()
export class EnseignantService {
    constructor(@InjectModel('Enseignant') private readonly enseignantModel: Model<Enseignant>){}
    
    async findAll() {
        return await this.enseignantModel.find();
    }

    async createDefault() {
        const newDefaultEnseignantProfile = new this.enseignantModel({
            nom: '',
            prenom: '',
            titre: '',
            tel: '',
            email: '',
            image: '',
            sexe: '',
        });
        return await newDefaultEnseignantProfile.save();
    }

    async findById(idEnseignant) {
        return this.enseignantModel.findById(idEnseignant).exec();
    }

    async updateEnseignant(idEnseignant, enseignantInput: UpdateEnseignantInput): Promise<Enseignant> {
        const updatedEnseignant = await this.enseignantModel
            .findByIdAndUpdate(idEnseignant, enseignantInput, { new: true });
        return updatedEnseignant;
    }
}
