import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tutorial } from './tutorial.entity';
import { TutorialsController } from './tutorials.controller';
import { TutorialsService } from './tutorials.service';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Tutorial]), DefaultAdminModule],
    providers: [TutorialsService],
    controllers: [TutorialsController],
})
export class TutorialsModule {
    constructor(private readonly tutorialSite: DefaultAdminSite) {
        tutorialSite.register('Maestras', Tutorial);

    }
}
