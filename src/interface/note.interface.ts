import { Document }  from 'mongoose'

export interface Note extends Document {
        id?: String;
        etudiant?: String;
        valeur: Number;
        matiere: String;
        niveau: String,
        parcours: String,
        anneeUniversitaire: String;
    }