import { ParcoursService } from './../parcours/parcours.service';
import { NiveauService } from './../niveau/niveau.service';
import { AnneeUniversitaireService } from './../annee-universitaire/annee-universitaire.service';
import { BordereauxsService } from './../bordereauxs/bordereauxs.service';
import { Body, Controller, Post } from '@nestjs/common';
import { InscriptionDTO } from 'src/dto/inscription.dto';
import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { InscriptionService } from './inscription.service';


@Controller('inscriptions')
export class InscriptionController {
    constructor(private readonly inscriptionService: InscriptionService,
                private readonly studentService: EtudiantsService,
                private readonly bordereauService: BordereauxsService,
                private readonly anneeUniversitaire: AnneeUniversitaireService,
                private readonly niveauService: NiveauService,
                private readonly parcoursService: ParcoursService){}

   @Post()
   async createInscription(@Body() inscriptionDTO: InscriptionDTO){
        const etudiant = { ...inscriptionDTO.studentInfo};
        const bordereau = { ...inscriptionDTO.bordereauInfo};
        //first, create the student and then return the ID
        const createdStudent = await this.studentService.create(etudiant);
        //then create the bordereau and return the ID
        const createdBodereau = await this.bordereauService.create(bordereau);

        // console.log("Student Id" + createdStudent.id);
        // console.log("Bordereau Id" + createdBodereau.id);
        //find anneUniversitaire by id
        const promotion = await this.anneeUniversitaire.findById(inscriptionDTO.anneeUniversitaire);
        //find niveau ById
        const niveau =  await this.niveauService.getById(inscriptionDTO.niveau);
        //find parcours By Id
        const parcours = await this.parcoursService.findById(inscriptionDTO.parcours);

        const inscription = await this.inscriptionService.createInscription(
            createdStudent.id,
            createdBodereau.id,
            promotion.id,
            niveau.id,
            parcours.id
            )
            
        console.log(inscription);
        return inscription;
    };
}
