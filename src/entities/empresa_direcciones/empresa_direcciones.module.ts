import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpresaDireccionesService } from './empresa_direcciones.service';
import { EmpresaDireccion } from './empresa_direccion.entity';
import { EmpresasDireccionesController } from './empresa_direcciones.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EmpresaDireccion])],
    providers: [EmpresaDireccionesService],
    controllers: [EmpresasDireccionesController],
})
export class EmpresaDireccionesModule {

}
