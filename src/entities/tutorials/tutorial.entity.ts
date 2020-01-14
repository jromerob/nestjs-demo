import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tutorial')
export class Tutorial {

    @PrimaryGeneratedColumn() //Autonumerico
    id: number;

    @Column({ length: 160 })
    name: string;

    @Column({ length: 100 })
    author: string;

}
