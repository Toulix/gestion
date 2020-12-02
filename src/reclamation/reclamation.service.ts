import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reclamation } from 'src/interface/reclamation.interface';

@Injectable()
export class ReclamationService {
    constructor(@InjectModel('Reclamation') 
                private readonly reclamationModel: Model<Reclamation>) {}

    async findAll() {
        return await this.reclamationModel.find().exec();
    }

    async createReclamation(reclamation) {
      const newReclamation = new this.reclamationModel(reclamation);
      return await newReclamation.save();
    }

    async findPerEnseignant(idEnseignant) {
        return await this.reclamationModel.find({enseignant : idEnseignant})
    }
   
    async updateReclamation(idReclamation: string, note?: number, etat?:string) {
        return await this.reclamationModel.findOneAndUpdate(
            {
              _id: idReclamation
            }, 
            {
              $set: {
                  note: note,
                  etat: etat
                }
            },
            {
              new: true
            });
          }
    }

