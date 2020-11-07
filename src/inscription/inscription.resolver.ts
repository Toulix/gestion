import { ParcoursService } from './../parcours/parcours.service';
import { NiveauService } from './../niveau/niveau.service';
import { BordereauxsService } from './../bordereauxs/bordereauxs.service';
import { EtudiantsService } from './../etudiants/etudiants.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { InscriptionService } from './inscription.service';
import { Inscription } from './inscription.graphql.type';
import { Resolver, Query, Parent, ResolveField, Mutation, Args} from '@nestjs/graphql';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';
import { Etudiant } from 'src/etudiants/etudiant.graphql.type';
import { Bordereau } from 'src/bordereauxs/bordereauxs.graphql.type';
import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Parcour } from 'src/parcours/parcours.graphql.type';


@Resolver(of => Inscription)
export class InscriptionResolver {
    constructor(private inscriptionService: InscriptionService,
                private anneeUniversitaireService: AnneeUniversitaireService,
                private etudiantsService: EtudiantsService,
                private bordereauxsService: BordereauxsService,
                private niveauService: NiveauService,
                private parcoursService: ParcoursService) {}

    @Query(returns => [Inscription], { name: 'inscriptions'})
    async getAllInscription() {
        return await this.inscriptionService.findAll();
    }

    @ResolveField('anneeUniversitaire', returns => Promotion)
    async getAnneeUniversitaire(@Parent() inscription: Inscription) {
    //    const id = (inscription.anneeUniversitaire).toString();
    //    console.log(id);
     return await this.anneeUniversitaireService.findById(inscription.anneeUniversitaire);
    }

    @ResolveField('etudiant', returns => Etudiant)
    async getEtudiant(@Parent() inscription: Inscription) {
     return await this.etudiantsService.findById(inscription.etudiant);
    }

    @ResolveField('bordereau', returns => Bordereau)
    async getBordereau(@Parent() inscription: Inscription) {
     return await this.bordereauxsService.findById(inscription.bordereau);
    }

    @ResolveField('niveau', returns => Niveau)
    async getNiveau(@Parent() inscription: Inscription) {
     return await this.niveauService.getById(inscription.niveau);
    }

    @ResolveField('parcours', returns => Parcour)
    async getParcours(@Parent() inscription: Inscription) {
     return await this.parcoursService.findById(inscription.parcours);
    }

    @Mutation(returns => Inscription)
    async updateInscription(@Args('id') idInscription: string, 
                            @Args('etat') etatInscription: String) {
        return this.inscriptionService.update(idInscription, etatInscription)
    }
}

// @Field(type => Etudiant)
// etudiant: Etudiant;

// @Field(type => Bordereau)
// bordereau: Bordereau;

// @Field(type => Promotion)
// anneeUniversitaire: Promotion;

// @Field(type => Niveau)
// niveau: Niveau;

// @Field(type => Parcour)
// parcours: Parcour;
