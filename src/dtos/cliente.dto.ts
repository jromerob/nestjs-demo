import { ApiModelProperty } from '@nestjs/swagger';

// tslint:disable:variable-name

export class Cliente {
    @ApiModelProperty()
    login: string;
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    node_id: string;
    @ApiModelProperty()
    avatar_url: string;
    @ApiModelProperty()
    gravatar_id: string;
    @ApiModelProperty()
    url: string;
    @ApiModelProperty()
    html_url: string;
    @ApiModelProperty()
    followers_url: string;
    @ApiModelProperty()
    following_url: string;
    @ApiModelProperty()
    gists_url: string;
    @ApiModelProperty()
    starred_url: string;
    @ApiModelProperty()
    subscriptions_url: string;
    @ApiModelProperty()
    organizations_url: string;
    @ApiModelProperty()
    repos_url: string;
    @ApiModelProperty()
    events_url: string;
    @ApiModelProperty()
    received_events_url: string;
    @ApiModelProperty()
    type: string;
    @ApiModelProperty()
    site_admin: boolean;
}
