import * as mongoose from 'mongoose'

export const BordereauSchema = new mongoose.Schema({
    //image bordereau
    bordereau : { type: String, required: true},
    numBordereau: { type: String, required: true},
    dateVersement: { type: Date, required: true},
    montant : { type: Number, required: true}
}, { timestamps : true })

