export class MatiereDTO {
 //   id?: string;
    libelle?: string;
    abbreviation?: string;
    enseignementTheorique?: number;
    enseignementDirige?: number;
    enseignementPratique?: number;
    credit?: number;
    poids?: number;
    enseignant?: string;
}

export class UniteDTO {
    ueName?: string;
    matieres?: [MatiereDTO]
} 

export class UeDTO {
    niveau?: string;
    parcours?: string;
    anneeUniversitaire?: string;
    semestreName?: string;
    ues?: [UniteDTO]
}


export class GetUeDTO {
    niveau?: string;
    parcours?: string;
    anneeUniversitaire?: string;
    semestreName?: string;
}