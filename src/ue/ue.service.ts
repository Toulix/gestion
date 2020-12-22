import { UeDTO, UniteDTO } from './../dto/ue.dto';
import { Ue } from './../interface/ue.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, set } from 'mongoose';

@Injectable()
export class UeService {
    constructor(@InjectModel('Ue') private readonly ueModel: Model<Ue>) {}

    async createUe(ueDTO: UeDTO) {
        const newUe = new this.ueModel(ueDTO)
        return await newUe.save();
    }

    async getUe(niveau: string, parcours: string, anneeUniversitaire: string, semestreName: string) {
        return await this.ueModel.findOne({ 
                            niveau, 
                            parcours, 
                            anneeUniversitaire,
                            semestreName
                        })
    }

    async deleteUe( ) {

    }

    async updateUe(
        niveau: string,
        parcours: string,
        anneeUniversitaire: string,
        semestreName: string,
        ues
        ) {
        
        const ue = await this.ueModel.findOneAndUpdate({ 
            niveau,
            parcours,
            anneeUniversitaire,
            semestreName
        }, {
            $set: {
                ues: ues
            }
         }, { new : true })

        return ue;
    }
}
