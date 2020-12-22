import * as mongoose from 'mongoose'

export const EnseignementSchema = new mongoose.Schema({
    // matiere: { type: mongoose.Schema.Types.ObjectId, ref:"Matiere", required: true},
    // enseignant : { type: mongoose.Schema.Types.ObjectId, ref:"Enseignant", required: false},
    // niveau: { type: mongoose.Schema.Types.ObjectId, ref:"Niveau", required: true},
    // parcours: { type: mongoose.Schema.Types.ObjectId, ref:"Parcour", required: true},
    // anneeUniversitaire:{ type: mongoose.Schema.Types.ObjectId, ref:"Promotion", required: true},
    // enseignementTheorique: Number,
    // enseignementDirige: Number,
    // enseignementPratique: Number,
    // credit: Number,
    // poids: Number


    libelle: String,
    abbreviation: String,
    enseignant : String,
    semestre: String,
    ue: String,
    niveau: String,
    parcours: String,
    anneeUniversitaire: String,
    enseignementTheorique: Number,
    enseignementDirige: Number,
    enseignementPratique: Number,
    credit: Number,
    poids: Number
},{ timestamps: true})
// @Field()
//   libelle: string;

//   @Field()
//   abbreviation: string;

//   @Field({nullable : true})
//   enseignant?: string;
  
//   @Field()
//   niveau: string;

//   @Field()
//   parcours: string;

//   @Field()
//   anneeUniversitaire: string;
  
//   @Field(type => Int, {nullable : true})
//   enseignementTheorique?: Number;

//   @Field(type => Int, {nullable : true})
//   enseignementDirige?: Number;

//   @Field(type => Int, {nullable : true})
//   enseignementPratique?: Number;

//   @Field(type => Float, {nullable : true})
//   credit?: Number;

//   @Field(type => Float, {nullable : true})
//   poids?: Number;

//   @Field(type => GraphQLISODateTime)
//   createdAt: Date;
  
//   @Field(type => GraphQLISODateTime)
//   updatedAt: Date;