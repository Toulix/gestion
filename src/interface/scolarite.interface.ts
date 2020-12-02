import { Document } from 'mongoose';

export interface Scolarite extends Document {
    id?: string;
    nom?: string
    prenom?: string,
    tel?: string,
    email?: string,
    image?: string,
    sexe?: string,
    fonction?:string,
}
