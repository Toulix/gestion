import * as mongoose from 'mongoose'

export const MatiereSchema = new mongoose.Schema({
    libelle : { type: String, required: true, unique: true},
    abbreviation: String,

    //resultat na calcul
    // poids: Number,
    // credit:  Number,

    // Any @ table enseignement
    // enseignementTheorique: Number,
    // enseignementDirige: Number,
    // enseignementPratique: Number,
})


