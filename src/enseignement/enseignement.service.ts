import { CreateEnseignementInput, UpdateEnseignementInput } from './enseignement.input.type';
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

    async getAllMatieresTaughtByEnseignant(enseignantName) {
        return this.enseignementModel.find({ enseignant : enseignantName})
    }

    async createOne(createEnseignementInput: CreateEnseignementInput) {
        const newEnseignement = new this.enseignementModel(createEnseignementInput);

        return await newEnseignement.save();
    }

    async update(idEnseignement: string, 
                 updateEnseignementInput: UpdateEnseignementInput) {
        const updatedEnseignement = await this.enseignementModel
                                            .findByIdAndUpdate(idEnseignement,
                                                               updateEnseignementInput,
                                                               { new: true})
            return updatedEnseignement;  
    }

    async deleteOne(idEnseignement) {
        try {
            await this.enseignementModel.findOneAndRemove({_id: idEnseignement})
            return true;
        } catch (error) {
            return false;
        }
    }
}
