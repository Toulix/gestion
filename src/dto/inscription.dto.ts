import { BordereauDTO } from './bordereau.dto';
import { StudentDTO } from "./student.dto";

export class InscriptionDTO {
    studentInfo: StudentDTO;
    bordereauInfo: BordereauDTO;
    anneeUniversitaire: string;
    niveau: string;
    parcours: string;
    date: Date;
    etat: string;
}