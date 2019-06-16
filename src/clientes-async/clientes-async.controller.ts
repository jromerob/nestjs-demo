import {
    Controller, HttpService, Get, Header,
} from '@nestjs/common';
import {
    ClientesAsyncService,
} from './clientes-async.service';

@Controller('clientes-async')
export class ClientesAsyncController {

    constructor(private readonly clientesAsyncService: ClientesAsyncService) { }

    @Get()
    @Header('Cache-Control', 'none')
    async GetAll(): Promise<any> {
        return this.clientesAsyncService.getAll();
    }

}
