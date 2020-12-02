import { ScolariteService } from './scolarite.service';
import { Scolarite } from './scolarite.graphql.type';
import {  Query , Args, Mutation, Parent, Resolver } from "@nestjs/graphql";
import { UpdateScolariteInput } from './scolarite.input.type';

@Resolver(of => Scolarite)
export class ScolariterResolver {
    constructor(private scolariteService :ScolariteService) {}
    
    @Query(returns => [Scolarite], {name:'scolarites'})
    async getAllScolarite() {
        this.scolariteService.findAll()
    }

    @Query(returns => Scolarite, { name: 'scolarite' })
    async getOneScolarite(@Args('scolariteId') scolariteId: string) {
        return await this.scolariteService.findById(scolariteId);
    }

    @Mutation(returns => Scolarite)
    async createDefaultScolariteProfile() {
        return await this.scolariteService.createDefault();
    }

    @Mutation(returns => Scolarite)
    async editScolariteProfile(@Args('scolariteId') scolariteId: string,
                               @Args('updateScolariteInput') updateScolariteInput: UpdateScolariteInput) {
        return await this.scolariteService
                         .updateScolarite(scolariteId,updateScolariteInput);
    }

}


