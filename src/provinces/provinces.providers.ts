import { Connection, Repository } from 'typeorm';
import { Province } from './province.entity';

export const provinceProviders = [
    {
        provide: 'PROVINCE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Province),
        inject: ['DATABASE_CONNECTION'],
    },
];