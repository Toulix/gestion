import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class Matiere {

    @Field(type => ID)
    id: string;

    @Field({nullable: true})
    libelle: string;

    @Field({nullable: true})
    abbreviation: string;

    // @Field(type => Float, {nullable: true})
    // poids: number;

    // @Field(type => Int, {nullable: true})
    // credit: number;

    // @Field(type => Float, {nullable: true})
    // enseignementTheorique: number;
    
    // @Field(type => Float, {nullable: true})
    // enseignementDirige: number;
    
    // @Field(type => Float, {nullable: true})
    // enseignementPratique: number;

}
