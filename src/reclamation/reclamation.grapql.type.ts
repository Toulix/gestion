import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { Promotion } from "src/annee-universitaire/annee-universitaire.graphl.type";
import { Enseignant } from "src/enseignant/enseignant.graphql.type";
import { Etudiant } from "src/etudiants/etudiant.graphql.type";
import { Matiere } from "src/matiere/matiere.graphql.type";
import { Niveau } from "src/niveau/niveau.graphql.type";
import { Parcour } from "src/parcours/parcours.graphql.type";


@ObjectType()
export class Reclamation {
    @Field(type => ID)
    id: string;

    @Field(type => ID)
    etudiant: Etudiant;

    @Field(type => ID)
    niveau: Niveau;

    @Field(type => ID)
    parcours: Parcour;

    @Field(type => ID)
    anneeUniversitaire: Promotion;

    @Field(type => ID)
    enseignant: Enseignant;

    @Field(type => ID)
    matiere: Matiere;

    @Field({nullable : true})
    motif?: string;

    @Field(type => GraphQLISODateTime)
    date: Date;

    @Field()
    etat: string;

    @Field(type => GraphQLISODateTime)
    createdAt: Date;
    
    @Field(type => GraphQLISODateTime)
    updatedAt: Date;
}
