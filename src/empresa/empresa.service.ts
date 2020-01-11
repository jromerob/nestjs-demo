import { Injectable } from '@nestjs/common';
import { CustomResponse } from 'src/dtos/custom-response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresasService {

    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>) { }

    getAll(): Promise<Empresa[]> {
        return this.empresaRepository.find();
    }

    async get(id: number): Promise<Empresa> {
        return await this.empresaRepository.findOne(id);
    }

    save(cliente: any): CustomResponse {
        return {
            statusCode: 201,
            message: `Empresa ${cliente.login} guardado correctamente`,
        };
    }

}
