import { Field, ID, ObjectType, GraphQLISODateTime, Float } from '@nestjs/graphql';

@ObjectType()
export class Bordereau {
  
  @Field(type => ID) 
  id: string;
//ito le sary 
  @Field()
  bordereau: string

  @Field()
  numBordereau: string

  @Field(type => GraphQLISODateTime) 
  dateVersement: Date;

  @Field(type => Float) 
  montant: number;

}


    // bordereau : { type: String, required: true},
    // numBordereau: { type: String, required: true},
    // dateVersement: { type: Date, required: true},
    // montant : { type: Number, required: true}