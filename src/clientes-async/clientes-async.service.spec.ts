import { Test, TestingModule } from '@nestjs/testing';
import { ClientesAsyncService } from './clientes-async.service';

describe('ClientesAsyncService', () => {
  let service: ClientesAsyncService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesAsyncService],
    }).compile();

    service = module.get<ClientesAsyncService>(ClientesAsyncService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
