import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const EtudiantSchema = new mongoose.Schema(
  {
    matricule: { type: String, unique: true },
    avatar :  { type: String, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    cin: { type: String, unique: true},
    tel: { type: String, unique: true },
    mail: { type: String, required: true},
    adresse: { type: String },
    sexe: { type: String, required: true },
    dateNaissance: { type: Date, required: true },
    lieuNaissance: { type: String, required: true },
    situationMatrimoniale: { type: String, required: true },
    pere: { type: String },
    statutPere: { type: String },
    professionPere: { type: String },
    mere: { type: String },
    statutMere: { type: String },
    professionMere : { type: String},
    tuteur: { type: String },
    statusTuteur: { type: String},
    professionTuteur : { type: String},
    adresseParentsTuteurs: { type: String},
    serie: { type: String, required: true },
    mention: { type: String, required: true },
    anneeObtention: { type: String, required: true },
    origine: { type: String, required: true }
  },
  {
    timestamps: true,
  },
);
