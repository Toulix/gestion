import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';


@ObjectType()
export class Enseignant {
  @Field(type => ID) //type provided graphql (GraphQl)
  id: string; //type by typescript

  @Field({ nullable: true })
  nom?: string;

  @Field({ nullable: true })
  prenom: string;

  @Field({ nullable: true })
  titre: string;

  @Field({ nullable: true })
  tel: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  sexe: string;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;
  
  @Field(type => GraphQLISODateTime)
  updatedAt: Date;

}

// nom: String,
// prenom: String,
// titre: String,
// tel: String,
// email: String,
// image: String,
// sexe: String,