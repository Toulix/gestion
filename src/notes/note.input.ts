import { type } from 'os';
import { ID } from '@nestjs/graphql';
import { InputType, Field, Float, ArgsType } from '@nestjs/graphql';


@InputType()
export class CreateNoteInput {
    @Field(type => ID)
    etudiant: string;

    @Field(type => Float)
    valeur: number;

    @Field(type => ID)
    matiere: string;

    @Field(type => ID)
    niveau: string;

    @Field(type => ID)
    parcours: string;

    @Field(type => ID)
    anneeUniversitaire: string;
}
