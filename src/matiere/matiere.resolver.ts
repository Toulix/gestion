import { MatiereService } from './matiere.service';
import { Matiere } from './matiere.graphql.type';
import { Resolver, Query, Parent, ResolveField, Mutation, Args} from '@nestjs/graphql'

@Resolver(of => Matiere)
export class MatiereResolver {
    constructor(private matiereService: MatiereService){}

   
    @Query(returns => [Matiere], { name: 'matieres'})
    async getAllMatieres() {
        return await this.matiereService.findAll();
    }
    
    @Mutation(returns => Matiere)
    async createMatiere(@Args('libelle') libelle: string,
                        @Args('abbreviation') abbreviation : string ) {
        return await this.matiereService.createOne(libelle,abbreviation)
    }

    @Mutation(returns => Boolean)
    async deleteMatiere(@Args('idMatiere') idMatiere: string) {
        return await this.matiereService.deleteOne(idMatiere);
    }
    //matiere ampianarina mpamapianatra isakin classe
  
}