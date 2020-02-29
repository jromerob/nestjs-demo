import { Injectable } from '@nestjs/common';
import { CustomResponse } from 'src/dtos/custom-response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>) { }

    getAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async get(id: number): Promise<User> {
        const c = await this.usersRepository.findOne(id);
        c.login = '***';
        return c;
    }

    save(cliente: any): CustomResponse {
        return {
            statusCode: 201,
            message: `Cliente ${cliente.login} guardado correctamente`,
        };
    }

}
