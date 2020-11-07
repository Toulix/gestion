import { AnneeUniversitaireService } from './annee-universitaire.service';
import { Args, Resolver, Query, Parent} from '@nestjs/graphql';
import { Promotion } from './annee-universitaire.graphl.type';
import { Inscription } from 'src/inscription/inscription.graphql.type';

@Resolver(of => Promotion)
export class PromotionResolver {
    constructor(private anneeUniversitaireService: AnneeUniversitaireService) {}

    @Query(returns => Promotion, { name: 'anneeUniversitaire'})
    async getPromotion(@Args('id') id: string) {
        return await this.anneeUniversitaireService.findById(id);
    }

}