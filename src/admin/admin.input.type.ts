import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateAdminInput {

  @Field({nullable: true})
  nom?: string;

  @Field({nullable: true})
  prenom?: string;

  @Field({nullable: true})
  tel?: string;

  @Field({nullable: true})
  email?: string;

  @Field({nullable: true})
  image?: string;

  @Field({nullable: true})
  sexe?: string;

}