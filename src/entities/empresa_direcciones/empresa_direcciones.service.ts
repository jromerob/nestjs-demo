import { Injectable } from '@nestjs/common';
import { CustomResponse } from 'src/dtos/custom-response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresaDireccion } from './empresa_direccion.entity';

@Injectable()
export class EmpresaDireccionesService {

    constructor(
        @InjectRepository(EmpresaDireccion)
        private readonly clientesRepository: Repository<EmpresaDireccion>) { }

    getAll(): Promise<EmpresaDireccion[]> {
        return this.clientesRepository.find();
    }

    async get(id: number): Promise<EmpresaDireccion> {
        const c = await this.clientesRepository.findOne(id);
        return c;
    }

    save(empresaDireccion: any): CustomResponse {
        return {
            statusCode: 201,
            message: `EmpresaDireccion ${empresaDireccion.login} guardado correctamente`,
        };
    }

}
