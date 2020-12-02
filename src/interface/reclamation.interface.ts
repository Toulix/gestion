import { Document } from 'mongoose';

export interface Reclamation extends Document {
    id?: string,
    etudiant : string,
    niveau: string,
    parcours: string,
    anneeUniversitaire: string,
    enseignant: string,
    matiere: string,
    motif: string,
    date?: Date,
    note?: number,
    etat: string,
}
