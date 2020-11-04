import * as mongoose from 'mongoose'

export const ReclamationSchema = new mongoose.Schema({
    etudiant : { type: mongoose.Schema.Types.ObjectId, ref:"Etudiant"},
    niveau: { type: mongoose.Schema.Types.ObjectId, ref:"Niveau"},
    parcours : { type: mongoose.Schema.Types.ObjectId, ref:"Parcour"},
    anneeUniversitaire: { type: mongoose.Schema.Types.ObjectId, ref:"Promotion"},
    enseignant: { type: mongoose.Schema.Types.ObjectId, ref:"Enseignant"},
    matiere: { type: mongoose.Schema.Types.ObjectId, ref:"Matiere"},
    motif : { type: String},
    date: { type: Date, default: Date.now},
    note: { type: Number },
    etat: { type: String, default: "En cours"}
}, { timestamps : true });