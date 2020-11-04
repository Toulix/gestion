import * as mongoose from 'mongoose'

export const NiveauSchema = new mongoose.Schema({
    libelle : { type: String, required: true, unique: true},
    description: { type: String, required: true},
})