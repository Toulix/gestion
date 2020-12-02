import { UpdateEnseignantInput } from './enseignant.input.type';
import { EnseignantService } from './enseignant.service';
import { Enseignant } from './enseignant.graphql.type';
import {  Query , Args, Mutation, Resolver} from "@nestjs/graphql";
import { CurrentUser } from 'src/user/current-user';

@Resolver(of => Enseignant)
export class EnseignantResolver {
    constructor(private enseignantService : EnseignantService){}
    
    @Query(returns => [Enseignant], { name: 'enseignants'})
    async getAllEnseignant() {
        return await this.enseignantService.findAll();
    }

    @Query(returns => Enseignant, { name: 'enseignant' })
    async getOneEnseignant(@Args('enseignantId') enseignantId: string) {
        return await this.enseignantService.findById(enseignantId);
    }

    //Admin functionality
    @Mutation(returns => Enseignant)
    async createDefaultEnseignantProfile() {
        return await this.enseignantService.createDefault();
    }

    //update profile
    @Mutation(returns => Enseignant)
    async editEnseignantProfile(@Args('enseignantId')
                                 enseignantId: string,
                                @Args('updateEnseignantInput')
                                updateEnseignantInput: UpdateEnseignantInput) {
        return await this.enseignantService
                         .updateEnseignant(enseignantId,updateEnseignantInput);
    }




}