import { Entity, PrimaryColumn, Column } from 'typeorm';

// tslint:disable:variable-name
@Entity('cliente')
export class Cliente {

    @PrimaryColumn()
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
}
