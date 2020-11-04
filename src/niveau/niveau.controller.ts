import { NiveauDTO } from './../dto/niveau.dto';
import { NiveauService } from './niveau.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('niveau')
export class NiveauController {
    constructor(private readonly niveauService: NiveauService  ){}
    
    @Get(':idNiveau')
    async getNiveauById(@Param('idNiveau') id) {
        return await this.niveauService.getById(id);
    }

    @Get()
    async getNiveauByName(@Query('n') n: string) {
        return await this.niveauService.getByName(n);
    }

    @Post()
    async createNiveau(@Body() niveauDTO: NiveauDTO) {
        return await this.niveauService.create(niveauDTO);
    }

}
