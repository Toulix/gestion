import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetUeInput {
    @Field()
    niveau: string;

    @Field()
    parcours: string;

    @Field()
    semestreName: string;

    @Field()
    anneeUniversitaire: string;
}

