import { UpdateScolariteInput } from './scolarite.input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scolarite } from 'src/interface/scolarite.interface';

@Injectable()
export class ScolariteService {
    constructor(@InjectModel('Scolarite') private readonly scolariteModule: Model<Scolarite>) {}
    
    async findAll() {
        return await this.scolariteModule.find().exec();
    }

    async findById(idScolariteProfile) {
        return await this.scolariteModule.findById(idScolariteProfile).exec();
    }

    async createDefault() {
        const newDefaultScolariteProfile = new this.scolariteModule({
                nom: '' ,
                prenom: '',
                tel: '',
                email: '',
                image: '',
                sexe: '',
                fonction: ''
        });
        return await newDefaultScolariteProfile.save();
    }          
    
    async updateScolarite(scolariteId, updateScolariteInput: UpdateScolariteInput): Promise<Scolarite> {
        const updatedEnseignant = await this.scolariteModule
            .findByIdAndUpdate(scolariteId, updateScolariteInput, { new: true });
        return updatedEnseignant;
    }
}
