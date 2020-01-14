import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Cliente]), DefaultAdminModule],
    providers: [ClientesService],
    controllers: [ClientesController],
})
export class ClientesModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        // Register the User entity under the "Clientes" section  
        adminSite.register('Maestras', Cliente);
    }

}
