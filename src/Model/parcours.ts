import * as mongoose from 'mongoose'

export const ParcoursSchema = new mongoose.Schema({
    abbreviation : { type: String, required: true, unique: true},
    description: { type: String, required: true}
})