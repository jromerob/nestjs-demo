import { Controller, Get, Post, Body, Req, HttpCode, Header, Param } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Cliente } from 'src/dtos/cliente.dto';
import { CustomResponse } from 'src/dtos/custom-response';

@Controller('provinces')
export class ProvincesController {

    constructor(private provincesService: ProvincesService) {

    }

    @Get()
    public getAll(): Cliente[] {
        return this.provincesService.getAll();

    }

}
