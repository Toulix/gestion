import { InputType, Field, ID, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateEnseignementInput {
  @Field({nullable: true})
  libelle?: string;

  @Field({nullable: true})
  abbreviation?: string;

  @Field({nullable: true})
  enseignant?: string;

  @Field({nullable: true})
  semestre?: string;
  
  @Field({nullable: true})
  ue?: string;
  
  @Field({nullable: true})
  niveau?: string;
  
  @Field({nullable: true})
  parcours?: string;

  @Field({nullable: true})
  anneeUniversitaire?: string;

  @Field(type => Int, {nullable: true})
  enseignementTheorique?: number;
 
  @Field(type => Int, {nullable: true})
  enseignementDirige?: number;
 
  @Field(type => Int, {nullable: true})
  enseignementPratique?: number;
  
  @Field(type => Float, {nullable: true})
  credit?: number;
  
  @Field(type => Float, {nullable: true})
  poids?: number;

}

@InputType()
export class UpdateEnseignementInput {
    @Field({nullable: true})
    libelle?: string;
  
    @Field({nullable: true})
    abbreviation?: string;
  
    @Field({nullable: true})
    enseignant?: string;
  
    @Field({nullable: true})
    semestre?: string;
    
    @Field({nullable: true})
    ue?: string;
    
    @Field({nullable: true})
    niveau?: string;
    
    @Field({nullable: true})
    parcours?: string;
  
    @Field({nullable: true})
    anneeUniversitaire?: string;
  
    @Field(type => Int, {nullable: true})
    enseignementTheorique?: number;
   
    @Field(type => Int, {nullable: true})
    enseignementDirige?: number;
   
    @Field(type => Int, {nullable: true})
    enseignementPratique: number;
    
    @Field(type => Float, {nullable: true})
    credit: number;
    
    @Field(type => Float, {nullable: true})
    poids: number;
}
