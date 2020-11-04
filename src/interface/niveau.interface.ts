import { Document } from 'mongoose';

export interface Niveau extends Document {
    id?: string;
    libelle : string;
    description : string;
}