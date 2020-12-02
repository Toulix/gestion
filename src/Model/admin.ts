import * as mongoose from 'mongoose'


export const AdminSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    tel: String,
    email: String,
    image: String,
    sexe: String,
} , {timestamps: true})

