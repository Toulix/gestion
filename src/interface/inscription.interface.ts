import { Document } from 'mongoose' 

export interface Inscription extends Document {
    id?: string;
    etudiant : string;
    bordereau : string;
    anneeUniversitaire: string;
    niveau: string;
    parcours :string;
    date?: Date;
    etat?: string;
}