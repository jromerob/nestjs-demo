import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Entity('empresa_direccion')
export class EmpresaDireccion {
    // tslint:disable: variable-name
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 160 })
    direccion: string;

    @Column({ length: 160 })
    codigo_postal: string;

    @Column({ length: 160 })
    poblacion: string;

    @ManyToOne(type => Empresa, empresa => empresa.direcciones)
    empresa: Empresa;

}
