import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { Document } from 'mongoose' 

export interface Enseignement extends Document {
    id?: string;
    libelle?: string;
    abbreviation?: string;
    enseignant?: string;
    semestre?: String,
    ue?: String,
    niveau?: string;
    parcours?: string;
    anneeUniversitaire?: string;
    enseignementTheorique?: Number,
    enseignementDirige?: Number,
    enseignementPratique?: Number,
    credit?: Number,
    poids?: Number
}


// libelle: String,
// abbreviation: String,
// enseignant : String,
// semestre: String,
// ue: String,
// niveau: String,
// parcours: String,
// anneeUniversitaire: String,
// enseignementTheorique: Number,
// enseignementDirige: Number,
// enseignementPratique: Number,
// credit: Number,
// poids: Number