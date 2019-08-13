import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { ClientesAsyncController } from './clientes-async/clientes-async.controller';
import { ClientesAsyncService } from './clientes-async/clientes-async.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'toponimiajcyl',
      password: 'JBBDpAmH',
      database: 'toponimiajcyl',
      host: 'srvdeslin02.grupotecopy.es',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })],
  controllers: [AppController, ClientesController, ClientesAsyncController],
  providers: [AppService, ClientesService, ClientesAsyncService],
})
export class AppModule { }
