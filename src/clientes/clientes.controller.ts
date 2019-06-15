import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService) {

    }

    @Get()
    public getAll(): any {
        return this.clientesService.getAll();

    }

    @Post()
    public saveCliente(@Body() cliente: any): any {
        return this.clientesService.save(cliente);

    }
}
