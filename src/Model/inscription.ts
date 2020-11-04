import * as mongoose from 'mongoose'

export const InscriptionSchema = new mongoose.Schema({
    etudiant : { type: mongoose.Schema.Types.ObjectId, ref:"Etudiant"},
    bordereau : { type: mongoose.Schema.Types.ObjectId, ref:"Bordereau"},
    anneeUniversitaire: { type: mongoose.Schema.Types.ObjectId, ref:"Promotion"},
    niveau: { type: mongoose.Schema.Types.ObjectId, ref:"Niveau"},
    parcours : { type: mongoose.Schema.Types.ObjectId, ref:"Parcour"},
    date: { type: Date , default: Date.now},
    etat: { type: String, required: true, default: "En cours"}
})
