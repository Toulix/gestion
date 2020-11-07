import { Bordereau } from './../interface/bordereau.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BordereauxsService {

    constructor(@InjectModel('Bordereau') private readonly bordereauModel: Model<Bordereau>) {}
    
    async create(bordereau): Promise<Bordereau> {
        const newBordereau = new this.bordereauModel(bordereau);
        // const result = await newStudent.save();
        // console.log(result);
        return await newBordereau.save();
    }

    async findById(idBordereau) {
        return await this.bordereauModel.findById(idBordereau);
    }
}
