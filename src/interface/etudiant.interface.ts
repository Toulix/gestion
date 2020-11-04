import { Document } from 'mongoose'

export interface Etudiant extends Document {
  id?: string;
  matricule?: string;
  avatar: string;
  nom: string;
  prenom: string;
  cin?: string;
  tel?: string;
  mail: string;
  adresse: string;
  sexe: string;
  dateNaissance: Date;
  lieuNaissance: string;
  situationMatrimoniale: string;
  pere?: string;
  statutPere?: string;
  professionPere?: string;
  mere?: string;
  statutMere?: string;
  professionMere?: string;
  tuteur?: string;
  statusTuteur?: string;
  professionTuteur?: string;
  adresseParentsTuteurs?: string;
  serie: string;
  mention: string;
  anneeObtention: string;
  origine: string;
  etat: string;
}
