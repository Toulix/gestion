
import { UeService } from './ue.service';
import { Args, Resolver } from "@nestjs/graphql";
import {  Ue } from "./ue.graphql.type";
import { Query} from '@nestjs/graphql';
import { GetUeInput } from './ue.input.type';


@Resolver(of => Ue)
export class UeResolver {
    constructor(private ueService:  UeService){}

    @Query(returns => Ue, { name: 'ue'})
    async getOneUe(@Args('getUeInput') getUeInput: GetUeInput) {
    return await this.ueService.getUe(getUeInput.niveau, getUeInput.parcours, getUeInput.anneeUniversitaire, getUeInput.semestreName)
    }


}

