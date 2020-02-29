import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpresasController } from './empresa.controller';
import { EmpresasService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Empresa])],
    providers: [EmpresasService],
    controllers: [EmpresasController],
})
export class EmpresasModule {
}
