import { Inscription } from './../interface/inscription.interface';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class InscriptionService {
    constructor(@InjectModel('Inscription')
                private readonly inscriptionModel: Model<Inscription>) {}
   
    async createInscription(
        etudiant: string,
        bordereau: string,
        anneeUniversitaire: string,
        niveau: string,
        parcours: string): Promise<Inscription>{
        //here we pass a javascript object when creating an Inscription
        const newInscription =  new this.inscriptionModel(
                                            { etudiant, 
                                              bordereau, 
                                              anneeUniversitaire,
                                              niveau,
                                              parcours
                                            });
        return await newInscription.save();
    }

    async findAll() {
      return await this.inscriptionModel.find();
    }

    async update(idInscription, etatInscription) {
      return await this.inscriptionModel.findOneAndUpdate(
      {
        _id: idInscription
      }, 
      {
        $set: {
            etat: etatInscription
          }
      },
      {
        new: true
      });
    }
}
