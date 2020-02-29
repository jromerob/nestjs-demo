import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Entity('user')
export class User {
    // tslint:disable: variable-name
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 160 })
    login: string;

    @Column({ length: 160 })
    node_id: string;

    @Column({ length: 160 })
    avatar_url: string;

    @Column({ length: 160 })
    gravatar_id: string;

    @Column({ length: 160 })
    url: string;

    @Column({ length: 160 })
    html_url: string;

    @Column({ length: 160 })
    followers_url: string;

    @Column({ length: 160 })
    following_url: string;

    @Column({ length: 160 })
    gists_url: string;

    @Column({ length: 160 })
    starred_url: string;

    @Column({ length: 160 })
    subscriptions_url: string;

    @Column({ length: 160 })
    organizations_url: string;

    @Column({ length: 160 })
    repos_url: string;

    @Column({ length: 160 })
    events_url: string;

    @Column({ length: 160 })
    received_events_url: string;

    @Column({ length: 160 })
    type: string;

    @Column()
    site_admin: boolean;

    // Eager para obtener el objeto relacionado
    // @ManyToOne(type => Empresa, { cascade: true, eager: true })
    // empresa: Empresa;
}
