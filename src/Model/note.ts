import * as mongoose from 'mongoose'

export const NoteSchema = new mongoose.Schema({
    etudiant: String,
    valeur: {type: Number, max: 20, min:0},
    matiere: String,
    niveau: String,
    parcours: String,
    anneeUniversitaire: String
} , {timestamps: true})

