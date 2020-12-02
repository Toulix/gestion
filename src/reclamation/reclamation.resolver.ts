import { Utilisateur } from './../user/user.graphql.type';
import { UpdateReclamationArgs, CreateReclamationInput } from './reclamation.input.type';
import { MatiereService } from './../matiere/matiere.service';
import { EnseignantService } from './../enseignant/enseignant.service';
import { Enseignant } from 'src/enseignant/enseignant.graphql.type';
import { ReclamationService } from './reclamation.service';
import { ParcoursService } from './../parcours/parcours.service';
import { NiveauService } from './../niveau/niveau.service';
import { EtudiantsService } from './../etudiants/etudiants.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { Resolver, Query, Parent, ResolveField, Mutation, Args } from '@nestjs/graphql';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';
import { Etudiant } from 'src/etudiants/etudiant.graphql.type';
import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Parcour } from 'src/parcours/parcours.graphql.type';
import { Reclamation } from './reclamation.grapql.type';
import { Matiere } from 'src/matiere/matiere.graphql.type';
import { CurrentUser } from 'src/user/current-user';


@Resolver(of => Reclamation)
export class ReclamationResolver {
    constructor(private reclamationService: ReclamationService,
                private anneeUniversitaireService: AnneeUniversitaireService,
                private etudiantsService: EtudiantsService,
                private niveauService: NiveauService,
                private parcoursService: ParcoursService,
                private enseignantService: EnseignantService,
                private matiereService: MatiereService) {}

    @Query(returns => [Reclamation], { name: 'reclamations'})
    async getAllReclamation() {
        return await this.reclamationService.findAll();
    }
    //Reclamation micorrespondre @le mpampianatra
    @Query(returns => [Reclamation], { name: 'reclamationPerEnseignant'})
    async getAllReclamationPerEnseignant(@CurrentUser() user: Utilisateur) {
        return await this.reclamationService.findPerEnseignant(user.profile);
    }

    @ResolveField('etudiant', returns => Etudiant)
    async getEtudiant(@Parent() reclamation: Reclamation) {
        return await this.etudiantsService.findById(reclamation.etudiant);
    }

    @ResolveField('niveau', returns => Niveau)
    async getNiveau(@Parent() reclamation: Reclamation) {
     return await this.niveauService.getById(reclamation.niveau);
    }

    @ResolveField('parcours', returns => Parcour)
    async getParcours(@Parent() reclamation: Reclamation) {
     return await this.parcoursService.findById(reclamation.parcours);
    }

    @ResolveField('anneeUniversitaire', returns => Promotion)
    async getAnneeUniversitaire(@Parent() reclamation: Reclamation) {
        return await this.anneeUniversitaireService.findById(reclamation.anneeUniversitaire);
    }

    @ResolveField('enseignant', returns => Enseignant)
    async getEnseignant(@Parent() reclamation: Reclamation) {
        return await this.enseignantService.findById(reclamation.anneeUniversitaire);
    }

    @ResolveField('matiere', returns => Matiere)
    async getMatiere(@Parent() reclamation: Reclamation) {
        return await this.matiereService.findById(reclamation.anneeUniversitaire);
    }
    //mettre a jours le reclamation avec note et ou 
    @Mutation(returns => Reclamation)
     async updateReclamation(@Args() updateReclamationArgs: UpdateReclamationArgs) {
        const { reclamationId, note, etat } = updateReclamationArgs;
        return await this.reclamationService
                         .updateReclamation(reclamationId,note,etat);
    }

    //create reclamation !?
    @Mutation(returns => Reclamation)
     async createReclamation(@Args('createReclamationData')
                                createReclamationData: CreateReclamationInput) {
      
        return await this.reclamationService
                         .createReclamation(createReclamationData);
    }

}


// id?: string,
// etudiant : string,
// niveau: string,
// parcours: string,
// anneeUniversitaire: string,
// enseignant: string,
// matiere: string,
// motif: string,
// date?: Date,
// note?: number,
// etat: string,