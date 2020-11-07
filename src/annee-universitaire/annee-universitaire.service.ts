import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promotion } from '../interface/promotion.interface';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AnneeUniversitaireService {
    constructor(@InjectModel('Promotion') private readonly promotionModel: Model<Promotion>) {}
      
    async findById(id): Promise<Promotion> {
            return await this.promotionModel.findById(id).exec();
         }  

    async create(promotion) {
            const newPromotion = new this.promotionModel(promotion);
            return await newPromotion.save();
        }
    async findByName(name: string) {
        return await this.promotionModel.findOne({ libelle : name}).select('_id libelle');
    }
    // Année universitaire en cours
    async findActiveYear() {
        return await this.promotionModel.findOne({ isActive : true }).select('_id libelle');
    }
}
