import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Province {

    @PrimaryGeneratedColumn()
    // tslint:disable-next-line:variable-name
    c_prov_id: number;

    @Column('text')
    name: string;
}
