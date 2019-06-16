import { Test, TestingModule } from '@nestjs/testing';
import { ClientesAsyncController } from './clientes-async.controller';

describe('ClientesAsync Controller', () => {
  let controller: ClientesAsyncController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesAsyncController],
    }).compile();

    controller = module.get<ClientesAsyncController>(ClientesAsyncController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
