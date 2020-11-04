

import { Etudiant } from '../interface/etudiant.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EtudiantsService {
    constructor(@InjectModel('Etudiant') private readonly studentModel: Model<Etudiant>) {}
    
    async create(etudiant): Promise<Etudiant> {
        const newStudent = new this.studentModel(etudiant);
        // const result = await newStudent.save();
        // console.log(result);
        return await newStudent.save();
    }
}
