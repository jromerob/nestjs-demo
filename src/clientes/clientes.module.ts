import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    providers: [ClientesService],
    controllers: [ClientesController],
})
export class ClientesModule { }