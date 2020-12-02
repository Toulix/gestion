import * as mongoose from 'mongoose'


export const ScolariteSchema = new mongoose.Schema({
    nom: {type: String, default: ''},
    prenom: {type: String, default: ''},
    tel: {type: String, default: ''},
    email: {type: String, default: ''},
    image: {type: String, default: ''},
    sexe: {type: String, default: ''},
    fonction: {type: String, default: ''}
} , {timestamps: true})

