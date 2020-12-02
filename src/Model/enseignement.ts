import * as mongoose from 'mongoose'

export const EnseignementSchema = new mongoose.Schema({
    matiere: { type: mongoose.Schema.Types.ObjectId, ref:"Matiere", required: true},
    enseignant : { type: mongoose.Schema.Types.ObjectId, ref:"Enseignant", required: false},
    niveau: { type: mongoose.Schema.Types.ObjectId, ref:"Niveau", required: true},
    parcours: { type: mongoose.Schema.Types.ObjectId, ref:"Parcour", required: true},
    anneeUniversitaire:{ type: mongoose.Schema.Types.ObjectId, ref:"Promotion", required: true},
    enseignementTheorique: Number,
    enseignementDirige: Number,
    enseignementPratique: Number,
    credit: Number,
    poids: Number
})
