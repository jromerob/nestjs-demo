import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
import { EmpresaDireccionesService } from './empresa_direcciones.service';
import { EmpresaDireccion } from './empresa_direccion.entity';
import { EmpresasDireccionesController } from './empresa_direcciones.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EmpresaDireccion]), DefaultAdminModule],
    providers: [EmpresaDireccionesService],
    controllers: [EmpresasDireccionesController],
})
export class EmpresaDireccionesModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        // Register the User entity under the "EmpresaDirecciones" section
        adminSite.register('Maestras', EmpresaDireccion);
    }

}
