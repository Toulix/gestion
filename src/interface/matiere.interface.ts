import { Document } from 'mongoose' 

export interface Matiere extends Document {
    id?: string;
    libelle?: string;
    abbreviation?: string;
    // poids?: string;
    // credit?: string;
    // enseignementTheorique?: number;
    // enseignementDirige?: number;
    // enseignementPratique?: number;
}