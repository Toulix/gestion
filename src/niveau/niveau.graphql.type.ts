import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class Niveau {

    @Field(type => ID)
    id: string;

    @Field()
    libelle: string;

    @Field()
    description: string;

}
