import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Parcour {
    @Field(type => ID)
    id: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;
} 