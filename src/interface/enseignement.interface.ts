import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { Document } from 'mongoose' 

export interface Enseignement extends Document {
    id?: string;
    matiere: string;
    enseignant?: string;
    niveau: string;
    parcours: string;
    anneeUniversitaire: string;
    enseignementTheorique?: Number,
    enseignementDirige?: Number,
    enseignementPratique?: Number,
    credit?: Number,
    poids?: Number
}
