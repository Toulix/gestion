import { Document } from 'mongoose' 

export interface Enseignant extends Document {
    id?: string;
    nom?: string;
    prenom?: string;
    titre?: string;
    tel?: string;
    email?: string;
    image?: string;
    sexe?:string;
}
