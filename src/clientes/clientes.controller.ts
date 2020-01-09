import { Controller, Get, Post, Body, Header, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';

import { Cliente } from './cliente.entity';
import { CustomResponse } from '../dtos/custom-response';

@Controller('clientes')
export class ClientesController {

    constructor(private readonly clientesService: ClientesService) {

    }

    @Get()
    getAll(): Promise<Cliente[]> {
        return this.clientesService.getAll();

    }

    @Get(':id')
    findOne(@Param() params): Promise<Cliente> {
        return this.clientesService.get(params.id);
    }

    @Post()
    @Header('Cache-Control', 'none')
    public saveCliente(@Body() cliente: Cliente): CustomResponse {
        return this.clientesService.save(cliente);

    }
}
