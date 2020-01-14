import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

let app;


beforeEach(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});

describe('Empresas (e2e)', () => {



  test('/ (GET)', () => {
    return request(app.getHttpServer()).get('/empresas')
      .expect(200);
  });


});
