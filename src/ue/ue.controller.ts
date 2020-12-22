import { UeService } from './ue.service';
import { Body, Controller, Post, Patch, Get, Query } from '@nestjs/common';
import { GetUeDTO, UeDTO } from 'src/dto/ue.dto';

@Controller('ue')
export class UeController {
    constructor(private ueService: UeService) {}

    @Post()
    async createUe(@Body() ueDTO: UeDTO) {
        return await this.ueService.createUe(ueDTO);
    }

    @Patch()
    async updateUe(@Body() ueDTO :UeDTO) {
        return await this.ueService.updateUe(
            ueDTO.niveau,
            ueDTO.parcours,
            ueDTO.anneeUniversitaire,
            ueDTO.semestreName,
            ueDTO.ues
            )
    }
//niveau: string, parcours: string, anneeUniversitaire: string, semestreName: string
    @Get()
    async getOneUE(@Query('niveau') niveau: string, 
                     @Query('parcours') parcours: string,
                     @Query('anneeUniversitaire') anneeUniversitaire: string,
                     @Query('semestreName') semestreName: string
    ){
       
        return await this.ueService.getUe(niveau, parcours, anneeUniversitaire, semestreName);
    }
}
