import { PromotionDTO } from './../dto/promotion.dto';
import { AnneeUniversitaireService } from './annee-universitaire.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('annee-universitaire')
export class AnneeUniversitaireController {
    constructor(private readonly anneeUniversitaireService: AnneeUniversitaireService) {}
    
    @Get('/active')
    async getActivePromotion() {
        return await this.anneeUniversitaireService.findActiveYear()
    }
   
    @Get(':promotionId')
    async getPromotionById(@Param('promotionId') id) {
        return  await this.anneeUniversitaireService.findById(id);
    }

    @Get()
    async getPromotionByName(@Query('promotionName') promotionName: string) {
        return await this.anneeUniversitaireService.findByName(promotionName);
    }

    @Post()
    async createAnneeUniversitaire(@Body() promotionDTO: PromotionDTO) {
        return await this.anneeUniversitaireService.create(promotionDTO);
    }
}
