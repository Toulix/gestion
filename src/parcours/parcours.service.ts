import { Parcours } from './../interface/parcours.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';


@Injectable()
export class ParcoursService {
    constructor(@InjectModel('Parcour') private readonly parcoursModel: Model<Parcours>){}
    
    async findById(idParcours: string) {
        return await this.parcoursModel.findById(idParcours).exec();
    }

    async create(parcours) {
        const newParcours = new this.parcoursModel(parcours);
        return await newParcours.save();
    }

    async getAll() {
        return await this.parcoursModel.find().select('_id abbreviation description').exec();
    }

}
