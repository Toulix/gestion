import * as mongoose from 'mongoose'


export const EnseignantSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    titre: String,
    tel: String,
    email: String,
    image: String,
    sexe: String,
} , {timestamps: true})

