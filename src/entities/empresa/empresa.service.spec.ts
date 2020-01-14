import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasService } from './empresa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa.entity';

describe('EmpresasService', () => {
  let empresasService: EmpresasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({ keepConnectionAlive: true }), TypeOrmModule.forFeature([Empresa])],
      providers: [EmpresasService],
    }).compile();

    empresasService = module.get<EmpresasService>(EmpresasService);
  });

  describe('should be defined', () => {
    it('should be defined', () => {
      expect(empresasService).toBeDefined();
    });
  });

  describe('Devolver empresas', () => {
    it('Debería retornar un array de empresas', async () => {
      expect(await empresasService.getAll()).not.toBeUndefined();
    });
  });

});
