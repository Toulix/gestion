import { Field, ID, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class Utilisateur {
    @Field(type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    roles: string;

    @Field(type => ID, {nullable: true})
    profile: string;
}



//https://hasura.io/learn/graphql/angular-apollo/subscriptions/3-create-subscription/