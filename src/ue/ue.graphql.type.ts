import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType() 
export class Matiere {
    
    @Field(type => ID)
    id: string;

    @Field({nullable: true})
    libelle?: string;

    @Field({nullable: true})
    abbreviation?: string;
    
    @Field(type => Float, {nullable: true})
    enseignementTheorique?: number;
    
    @Field(type => Float, {nullable: true})
    enseignementDirige?: number;

    @Field(type => Float, {nullable: true})
    enseignementPratique?: number;
    
    @Field(type => Float, {nullable: true})
    credit?: number;
    
    @Field(type => Float, {nullable: true})
    poids?: number;
    
    @Field({ nullable : true})
    enseignant?: string;
}


@ObjectType() 
export class Unite {
    @Field(type => ID)
    id: string;

    @Field({nullable: true})
    ueName?: string;

    @Field(type => [Matiere], {nullable: 'items'})
    matieres?: Matiere[]
}


@ObjectType()
export class Ue {
    @Field(type => ID)
    id: string;

    @Field({nullable: true})
    niveau?: string;

    @Field({nullable: true})
    parcours?: string;

    @Field({nullable: true})
    anneeUniversitaire?: string;

    @Field({nullable: true})
    semestreName?: string;

    @Field(type => [Unite], {nullable: 'items'})
    ues?: Unite[]

}
