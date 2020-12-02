import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  roles: string;

  @Field(type => ID, {nullable: true})
  profile: string;

}


