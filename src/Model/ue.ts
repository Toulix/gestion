import * as mongoose from 'mongoose'

export const MatiereSchema = new mongoose.Schema({
    libelle: String,
    abbreviation: String,
    enseignementTheorique: Number,
    enseignementDirige: Number,
    enseignementPratique: Number,
    credit: Number,
    poids: Number,
    enseignant: String,
})

//anatin'ny unite d'enseignement ray misy matieres maromaro
export const UniteSchema = new mongoose.Schema({
    ueName: { type: String},
    matieres: [MatiereSchema]
})

export const UeSchema = new mongoose.Schema({
    niveau: String,
    parcours: String,
    anneeUniversitaire: String,
    semestreName: {type: String},
    ues: [UniteSchema]
})

