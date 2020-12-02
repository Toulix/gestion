
import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';


@ObjectType()
export class Etudiant {
  @Field(type => ID) //type provided graphql (GraphQl)
  id: string; //type by typescript

  @Field({ nullable: true })
  matricule?: string;

  @Field()
  avatar: string;

  @Field()
  nom: string;

  @Field()
  cin: string;

  @Field()
  prenom: string;

  @Field()
  tel: string;

  @Field()
  mail: string;

  //   @Field(type => [String])
  //   etat: string[];
  @Field()
  adresse: string;

  @Field()
  sexe: string;

  @Field(type => GraphQLISODateTime)
  dateNaissance: Date;

  @Field()
  lieuNaissance: string;

  @Field()
  situationMatrimoniale: string;

  @Field({ nullable: true })
  pere?: string;

  @Field({ nullable: true })
  statutPere?: string;

  @Field({ nullable: true })
  professionPere?: string;

  @Field({ nullable: true })
  mere?: string;

  @Field({ nullable: true })
  statutMere?: string;

  @Field({ nullable: true })
  professionMere?: string;

  @Field({ nullable: true })
  tuteur?: string;

  @Field({ nullable: true })
  statusTuteur?: string;

  @Field({ nullable: true })
  professionTuteur?: string;

  @Field({ nullable: true })
  adresseParentsTuteurs?: string;

  @Field()
  serie: string;

  @Field()
  mention: string;

  @Field()
  anneeObtention: string;

  @Field()
  origine: string;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;

  @Field(type => GraphQLISODateTime)
  updatedAt: Date;

}


// matricule: { type: String, unique: true, default:"Non Assigné" },
//     avatar :  { type: String, unique: true },
//     nom: { type: String, required: true },
//     prenom: { type: String, required: true },
//     cin: { type: String, unique: true},
//     tel: { type: String, unique: true },
//     mail: { type: String, required: true},
//     adresse: { type: String },
//     sexe: { type: String, required: true },
//     dateNaissance: { type: Date, required: true },
//     lieuNaissance: { type: String, required: true },
//     situationMatrimoniale: { type: String, required: true },
//     pere: { type: String },
//     statutPere: { type: String },
//     professionPere: { type: String },
//     mere: { type: String },
//     statutMere: { type: String },
//     professionMere : { type: String},
//     tuteur: { type: String },
//     statusTuteur: { type: String},
//     professionTuteur : { type: String},
//     adresseParentsTuteurs: { type: String},
//     serie: { type: String, required: true },
//     mention: { type: String, required: true },
//     anneeObtention: { type: String, required: true },
//     origine: { type: String, required: true }