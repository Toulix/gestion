import { Enseignant } from './../enseignant/enseignant.graphql.type';
import { Matiere } from 'src/matiere/matiere.graphql.type';
import { Field, ID, ObjectType, GraphQLISODateTime, Int, Float } from '@nestjs/graphql';
import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Parcour } from 'src/parcours/parcours.graphql.type';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';


@ObjectType()
export class Enseignement {
  // @Field(type => ID) //type provided graphql (GraphQl)
  // id: string; //type by typescript

  // @Field(type => Matiere)
  // matiere: Matiere;

  // @Field(type => Enseignant,  {nullable : true})
  // enseignant?: Enseignant;
  
  // @Field(type => Niveau)
  // niveau: Niveau;

  // @Field(type => Parcour)
  // parcours: Parcour;

  // @Field(type => Promotion)
  // anneeUniversitaire: Promotion;
  
  // @Field(type => Int, {nullable : true})
  // enseignementTheorique?: Number;

  // @Field(type => Int, {nullable : true})
  // enseignementDirige?: Number;

  // @Field(type => Int, {nullable : true})
  // enseignementPratique?: Number;

  // @Field(type => Float, {nullable : true})
  // credit?: Number;

  // @Field(type => Float, {nullable : true})
  // poids?: Number;

  // @Field(type => GraphQLISODateTime)
  // createdAt: Date;
  
  // @Field(type => GraphQLISODateTime)
  // updatedAt: Date;
  @Field(type => ID) //type provided graphql (GraphQl)
  id: string; //type by typescript

  @Field({nullable : true})
  libelle?: string;

  @Field({nullable : true})
  abbreviation?: string;

  @Field({nullable : true})
  enseignant?: string;

  @Field({nullable : true})
  semestre?: String;

  @Field({nullable : true})
  ue?: String;
  
  @Field({nullable : true})
  niveau?: string;

  @Field({nullable : true})
  parcours?: string;

  @Field({nullable : true})
  anneeUniversitaire?: string;
  
  @Field(type => Int, {nullable : true})
  enseignementTheorique?: Number;

  @Field(type => Int, {nullable : true})
  enseignementDirige?: Number;

  @Field(type => Int, {nullable : true})
  enseignementPratique?: Number;

  @Field(type => Float, {nullable : true})
  credit?: Number;

  @Field(type => Float, {nullable : true})
  poids?: Number;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;
  
  @Field(type => GraphQLISODateTime)
  updatedAt: Date;

}
