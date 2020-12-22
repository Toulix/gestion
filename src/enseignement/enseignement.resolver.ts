import { Utilisateur } from './../user/user.graphql.type';
import { CurrentUser } from './../user/current-user';
import { MatiereService } from './../matiere/matiere.service';
import { EnseignementService } from './enseignement.service';
import { EnseignantService } from './../enseignant/enseignant.service';
import { ParcoursService } from './../parcours/parcours.service';
import { NiveauService } from './../niveau/niveau.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { Resolver, Query, Parent, ResolveField, Mutation, Args} from '@nestjs/graphql';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';
import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Parcour } from 'src/parcours/parcours.graphql.type';
import { Enseignement } from './enseignement.graphql.type';
import { Enseignant } from 'src/enseignant/enseignant.graphql.type';
import { Matiere } from 'src/matiere/matiere.graphql.type';
import { CreateEnseignementInput, UpdateEnseignementInput } from './enseignement.input.type';


@Resolver(of => Enseignement)
export class EnseignementResolver {

    constructor(private enseignementService: EnseignementService,
                private enseignantService: EnseignantService,
                // private anneeUniversitaireService: AnneeUniversitaireService,
                // private matiereService: MatiereService,
                // private niveauService: NiveauService,
                // private parcoursService: ParcoursService
                ) {}
    @Query(returns => [Enseignement], { name: 'enseignements'})
    async getAllEnseignement() {
        return await this.enseignementService.findAll();
    }

    //liste des matières enseigné par un enseignant
    @Query(returns => Enseignement, {name: 'matieresParEnseignant'}) 
        async getMatiereEnseigneParEnseignant(@Args('enseignantName') enseignantName: string,) {
            return await this.enseignementService.getAllMatieresTaughtByEnseignant(enseignantName);
        }

    @Mutation(returns => Enseignement)
    async createEnseignement(@Args('createEnseignementInput') createEnseignementInput: CreateEnseignementInput) {
        return await this.enseignementService.createOne(createEnseignementInput);
    }

    @Mutation(returns => Enseignement)
    async updateEnseignement(@Args('enseignementId')
                             enseignementId: string,
                             @Args('updateEnseignementInput')
                             updateEnseignementInput: UpdateEnseignementInput) {
        return await this.enseignementService.update(enseignementId, updateEnseignementInput )
                             }
                             
    @Mutation(returns => Boolean) 
    async deleteEnseignement(@Args('idMatiere') idEnseignement: string) {
        return await this.enseignementService.deleteOne(idEnseignement);
    }
    
    @Query(returns => Enseignement, {name: 'matieresOfCurrentEnseignant'})
        async getAllMatieresTaughtByCurrentEnseignant(@CurrentUser() user: Utilisateur) {
            const enseignant = await this.enseignantService.findById(user.profile);
            return await this.enseignementService.getAllMatieresTaughtByEnseignant(enseignant.nom);
        }

    // @ResolveField('matiere', returns => Matiere)
    // async getMatiere(@Parent() enseignement: Enseignement) {
    //     return await this.matiereService.findById(enseignement.matiere);
    // }

    // @ResolveField('enseignant', returns => Enseignant)
    // async getEnseignant(@Parent() enseignement: Enseignement) {
    //     return await this.enseignantService.findById(enseignement.enseignant);
    // }

    // @ResolveField('niveau', returns => Niveau)
    // async getNiveau(@Parent() enseignement: Enseignement) {
    //  return await this.niveauService.getById(enseignement.niveau);
    // }

    // @ResolveField('parcours', returns => Parcour)
    // async getParcours(@Parent() enseignement: Enseignement) {
    //  return await this.parcoursService.findById(enseignement.parcours);
    // }

    // @ResolveField('anneeUniversitaire', returns => Promotion)
    // async getAnneeUniversitaire(@Parent() enseignement: Enseignement) {
    //     return await this.anneeUniversitaireService.findById(enseignement.anneeUniversitaire);
    // }

    //creer enseignement
}
