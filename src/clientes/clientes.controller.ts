import { Controller, Get, Post, Body, Req, HttpCode, Header, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from 'src/dtos/cliente.dto';
import { CustomResponse } from 'src/dtos/custom-response';

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService) {

    }

    @Get()
    public getAll(): Cliente[] {
        return this.clientesService.getAll();

    }

    @Get(':id')
    findOne(@Param() params): Cliente {
        return this.clientesService.get(params.id - 1);
    }

    @Post()
    @Header('Cache-Control', 'none')
    public saveCliente(@Body() cliente: Cliente): CustomResponse {
        return this.clientesService.save(cliente);

    }
}
