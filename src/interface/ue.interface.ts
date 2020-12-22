
import { Document } from 'mongoose';

export interface Matiere extends Document {
    //id?: string,
    libelle?: string,
    abbreviation?: string,
    enseignementTheorique?: number,
    enseignementDirige?: number,
    enseignementPratique?: number,
    credit?: number,
    poids?: number,
    enseignant?: string,
}

export interface Unite extends Document {
    ueName?: { type: string},
    matieres?: [Matiere]
} 

export interface Ue extends Document {
    niveau?: string,
    parcours?: string,
    anneeUniversitaire?: string,
    semestreName?: string,
    ues?: [Unite]
}
