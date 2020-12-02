
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from 'src/interface/admin.interface';
import { UpdateAdminInput } from './admin.input.type';

@Injectable()
export class AdminService {
    constructor(@InjectModel('Admin')
                private readonly adminModel: Model<Admin>){}

    
                async findAll() {
                    return await this.adminModel.find();
                }
            
                async createDefault() {
                    const newDefaultAdminProfile = new this.adminModel({
                        nom: '',
                        prenom: '',
                        tel: '',
                        email: '',
                        image: '',
                        sexe: '',
                    });
                    return await newDefaultAdminProfile.save();
                }
            
                async findById(idAdmin) {
                    return this.adminModel.findById(idAdmin).exec();
                }
            
                async updateAdmin(idAdmin, adminInput: UpdateAdminInput): Promise<Admin> {
                    const updatedAdmin = await this.adminModel
                        .findByIdAndUpdate(idAdmin, adminInput, { new: true });
                    return updatedAdmin;
                }
}
