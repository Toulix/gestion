import { ParcoursDTO } from './../dto/parcours.dto';
import { ParcoursService } from './parcours.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('parcours')
export class ParcoursController {
    constructor(private readonly parcoursService: ParcoursService){}

    @Get(':idParcours')
    async getParcours(@Param('idParcours') idParcours: string) {
        return await this.parcoursService.findById(idParcours);
    }

    @Get()
    async getAllParcours() {
        return await this.parcoursService.getAll();
    }

    @Post()
    async createParcours(@Body() parcousDTO: ParcoursDTO) {
        return await this.parcoursService.create(parcousDTO);
    } 
}
