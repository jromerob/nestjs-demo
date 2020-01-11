import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('empresa')
export class Empresa {
    // tslint:disable: variable-name
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 160 })
    name: string;

}
