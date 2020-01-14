import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { EmpresaDireccion } from '../empresa_direcciones/empresa_direccion.entity';


@Entity('empresa')
export class Empresa {
    // tslint:disable: variable-name
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 160 })
    name: string;

    // @ManyToOne(type => EmpresaDireccion, { cascade: true, eager: true }  )
    @OneToMany(type => EmpresaDireccion, empresaDireccion => empresaDireccion.empresa, { eager: true, })
    direcciones: EmpresaDireccion[];

}
