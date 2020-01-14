import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpresasController } from './empresa.controller';
import { EmpresasService } from './empresa.service';
import { Empresa } from './empresa.entity';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Empresa]), DefaultAdminModule],
    providers: [EmpresasService],
    controllers: [EmpresasController],
})
export class EmpresasModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        // Register the User entity under the "Clientes" section
        adminSite.register('Maestras', Empresa);
    }
}
