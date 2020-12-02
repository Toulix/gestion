import { ID } from '@nestjs/graphql';
import { ArgsType, Field, Float, InputType } from '@nestjs/graphql';


@ArgsType()
export class UpdateReclamationArgs {
  @Field(type => ID)
  reclamationId: string;

  @Field({nullable :true})
  etat: string;

  @Field(type => Float, {nullable :true} )
  note: number;
}

@InputType()
export class CreateReclamationInput {
  @Field(type => ID)
  etudiant: string;

  @Field(type => ID)
  niveau: string;

  @Field(type => ID)
  parcours: string;

  @Field(type => ID)
  anneeUniversitaire: string;

  @Field(type => ID)
  enseignant: string;
  
  @Field(type => ID)
  matiere: string;

  @Field(type => ID, {nullable: true})
  motif?: string;
  
  @Field(type => Float, { nullable: true})
  note?: number;

  @Field(type => Float, { nullable: true})
  etat?: string;

}
