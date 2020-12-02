import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Scolarite {
    @Field(type => ID)
    id: string;

    @Field({nullable : true})
    nom: string;

    @Field({nullable : true})
    prenom: string;

    @Field({nullable : true})
    tel: string;

    @Field({nullable : true})
    email: string;

    @Field({nullable : true})
    image: string;

    @Field({nullable : true})
    sexe: string;

    @Field({nullable: true})
    fonction: string;

    @Field(type => GraphQLISODateTime)
    createdAt: Date;
    
    @Field(type => GraphQLISODateTime)
    updatedAt: Date;
}


// nom: String,
// prenom: String,
// tel: String,
// email: String,
// image: String,
// sexe: String,
// fonction: String