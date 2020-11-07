import { Field, ID, ObjectType, GraphQLISODateTime, Float } from '@nestjs/graphql';


@ObjectType()
export class Promotion {

    @Field(type => ID)
    id: string;
    
    @Field(type => Boolean)
    isActive: boolean;

    @Field()
    libelle: string;
    
    @Field(type => GraphQLISODateTime)
    debut: Date;

    @Field(type => GraphQLISODateTime)
    fin: Date;

    @Field(type => GraphQLISODateTime)
    createdAt: Date;
  
    @Field(type => GraphQLISODateTime)
    updatedAt: Date;


}





// export const PromotionSchema = new mongoose.Schema({
//     libelle : { type: String, required: true, unique: true},
//     debut: { type: Date },
//     fin: { type: Date },
//     isActive : {type: Boolean, default: true}
// }, { timestamps : true })