import { Test } from '@nestjs/testing';

import { TutorialsController } from './tutorials.controller';
import { TutorialsService } from './tutorials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorial } from './tutorial.entity';

describe('TutorialsController', () => {
    let tutorialsController: TutorialsController;
    let tutorialsService: TutorialsService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [TypeOrmModule.forRoot({ keepConnectionAlive: true }), TypeOrmModule.forFeature([Tutorial])],
            providers: [TutorialsService],
            controllers: [TutorialsController],
        }).compile();

        tutorialsService = module.get<TutorialsService>(TutorialsService);
        tutorialsController = module.get<TutorialsController>(TutorialsController);
    });

    describe('buscar todos', () => {
        it('Debería retornar un array de tutoriales', async () => {
            expect(await tutorialsController.findAll()).not.toBeUndefined();
        });
    });
});