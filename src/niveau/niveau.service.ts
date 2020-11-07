import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Niveau } from '../interface/niveau.interface';


@Injectable()
export class NiveauService {
    constructor(@InjectModel('Niveau') private readonly niveauModel: Model<Niveau> ) {}

    async getById(idNiveau) {
            return await this.niveauModel.findById(idNiveau);
        }
    async create(niveau) {
        const newNiveau = new this.niveauModel(niveau);
        return await newNiveau.save();
    }

    async getByName(niveau: string) {
        return await this.niveauModel.findOne({ libelle : niveau})
    }
}
