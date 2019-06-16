import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { ClientesAsyncController } from './clientes-async/clientes-async.controller';
import { ClientesAsyncService } from './clientes-async/clientes-async.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ClientesController, ClientesAsyncController],
  providers: [AppService, ClientesService, ClientesAsyncService],
})
export class AppModule { }
