import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class User {
    @Field(type => ID)
    _id: string;

    @Field()
    username: string;

    @Field({nullable : true})
    password: string;

    @Field()
    roles: string;
}

//https://hasura.io/learn/graphql/angular-apollo/subscriptions/3-create-subscription/