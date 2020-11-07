import { Parcour } from './../parcours/parcours.graphql.type';
import { Niveau } from './../niveau/niveau.graphql.type';
import { Promotion } from './../annee-universitaire/annee-universitaire.graphl.type';
import { Bordereau } from './../bordereauxs/bordereauxs.graphql.type';
import { Etudiant } from './../etudiants/etudiant.graphql.type';
import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';



@ObjectType()
export class Inscription {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  etat?: string;

  @Field(type => Etudiant)
  etudiant: Etudiant;

  @Field(type => Bordereau)
  bordereau: Bordereau;

  @Field(type => Promotion)
  anneeUniversitaire: Promotion;

  @Field(type => Niveau)
  niveau: Niveau;
  
  @Field(type => Parcour)
  parcours: Parcour;

  @Field(type => GraphQLISODateTime)
  date?: Date;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;
  
  @Field(type => GraphQLISODateTime)
  updatedAt: Date;
}
