import { Controller, Post, UseInterceptors, UploadedFiles, Get, Param, Res, Req } from '@nestjs/common';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { Response, Request} from 'express';
import { join } from 'path';
import { diskStorage } from 'multer';
import path = require('path');
import { Observable, of } from 'rxjs';


const storage = {
    storage: diskStorage({
    destination: './uploads',
    filename: function(req: Request, file, cb) {
        const filename: string = path.parse(file.originalname).name;
        const extension: string = path.parse(file.originalname).ext;
        cb(null, `${filename}${extension}`)
    }
    })
}

@Controller('images')
export class ImagesController {
    
    @Post('/students')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'avatar', maxCount: 1},
            { name: 'bordereau', maxCount: 1},
        ],storage))
    uploadFile(@UploadedFiles() files) {
        return { 
            avatar: files.avatar[0].originalname, 
            bordereau: files.bordereau[0].originalname 
        };
    }
//file nam => get /images/:imagename
    @Get(':imagename')
    seeUploadedFile(@Param('imagename') image, @Res() res: Response): Observable<any> {
        return of(res.sendFile(join(process.cwd(), 'uploads/' + image)));
    }
}
