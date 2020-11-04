import { Document } from 'mongoose';

export interface Promotion extends Document {
    id?: string;
    libelle : string
    debut: Date,
    fin: Date,
    isActive?:boolean
}