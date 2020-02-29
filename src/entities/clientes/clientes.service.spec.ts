import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { EmpresasService } from '../empresa/empresa.service';
import { Cliente } from './cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Cliente])],
      providers: [ClientesService],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
