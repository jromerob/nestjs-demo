import { Injectable } from '@nestjs/common';
import { CustomResponse } from 'src/dtos/custom-response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(Cliente)
        private readonly clientesRepository: Repository<Cliente>) { }

    async getAll(): Promise<Cliente[]> {
        return await this.clientesRepository.find();
    }

    async get(id: number): Promise<Cliente> {
        let c = await this.clientesRepository.findOne(id);
        return c;
    }

    save(cliente: any): CustomResponse {
        return {
            statusCode: 201,
            message: `Cliente ${cliente.login} guardado correctamente`,
        };
    }

}
