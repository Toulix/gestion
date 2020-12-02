import { CreateNoteInput } from './note.input';
import { NiveauService } from './../niveau/niveau.service';
import { NotesService } from './notes.service';
import { MatiereService } from './../matiere/matiere.service';
import { ParcoursService } from './../parcours/parcours.service';
import { EtudiantsService } from './../etudiants/etudiants.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { Resolver, Query, Parent, ResolveField, Mutation, Args, Float } from '@nestjs/graphql';
import { Promotion } from 'src/annee-universitaire/annee-universitaire.graphl.type';
import { Etudiant } from 'src/etudiants/etudiant.graphql.type';
import { Niveau } from 'src/niveau/niveau.graphql.type';
import { Parcour } from 'src/parcours/parcours.graphql.type';
import { Matiere } from 'src/matiere/matiere.graphql.type';
import { Note } from './notes.graphql.type';


@Resolver(of => Note)
export class NoteResolver {
    constructor(private notesService: NotesService,
                private niveauService: NiveauService,
                private parcoursService: ParcoursService,
                private anneeUniversitaireService: AnneeUniversitaireService,
                private etudiantsService: EtudiantsService,
                private matiereService: MatiereService) {}

    @Query(returns => [Note], { name: 'notes'})
    async getAllNotes() {
        return await this.notesService.findAll();
    }

    @ResolveField('etudiant', returns => Etudiant)
    async getEtudiant(@Parent() note: Note) {
        return await this.etudiantsService.findById(note.etudiant);
    }

    @ResolveField('matiere', returns => Matiere)
    async getMatiere(@Parent() note: Note) {
        return await this.matiereService.findById(note.matiere);
    }

    @ResolveField('niveau', returns => Niveau)
    async getNiveau(@Parent() note: Note) {
     return await this.niveauService.getById(note.niveau);
    }

    @ResolveField('parcours', returns => Parcour)
    async getParcours(@Parent() note: Note) {
     return await this.parcoursService.findById(note.parcours);
    }

    @ResolveField('anneeUniversitaire', returns => Promotion)
    async getAnneeUniversitaire(@Parent() note: Note) {
        return await this.anneeUniversitaireService.findById(note.anneeUniversitaire);
    }
// creer un note
    @Mutation(returns => Note)
    async createNote(@Args('CreateNoteInput') createNoteInput: CreateNoteInput) {
        return await this.notesService.createNote(createNoteInput);
    }
// modifier note
    @Mutation(returns => Note)
    async updateNote(@Args('idNote') idNote: string,
                     @Args('valeur', { type: () => Float}) valeur: number) {
        return await this.notesService.updateNote(idNote, valeur );
    }

}