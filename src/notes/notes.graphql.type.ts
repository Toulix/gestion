import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';
import { Field, Float, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { Etudiant } from "src/etudiants/etudiant.graphql.type";
import { Matiere } from "src/matiere/matiere.graphql.type";
import { Parcour } from 'src/parcours/parcours.graphql.type';


@ObjectType()
export class Note {
    @Field(type => ID)
    id: string;

    @Field(type => Etudiant)
    etudiant: Etudiant;

    @Field(type => Float, {defaultValue: 0})
    valeur: number;

    @Field(type => Matiere)
    matiere: Matiere;

    @Field(type => Niveau)
    niveau: Niveau;

    @Field(type => Parcour)
    parcours: Parcour;

    @Field(type => Promotion)
    anneeUniversitaire: Promotion;

    @Field(type => GraphQLISODateTime)
    createdAt: Date;
  
    @Field(type => GraphQLISODateTime)
    updatedAt: Date;
} 
