import * as mongoose from 'mongoose'

export const PromotionSchema = new mongoose.Schema({
    libelle : { type: String, required: true, unique: true},
    debut: { type: Date },
    fin: { type: Date },
    isActive : {type: Boolean, default: true}
}, { timestamps : true })