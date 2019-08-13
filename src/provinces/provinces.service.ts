import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Province } from './province.entity';

@Injectable()
export class ProvincesService {

    constructor(@Inject('PROVINCE_REPOSITORY') private readonly provinceRepository: Repository<async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }>  ) { }
getAll(): any {
    return DUMMY[id];
}

async findAll(): Promise < Photo[] > {
    return await this.photoRepository.find();
}

}
