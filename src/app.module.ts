import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ClientesController],
  providers: [AppService, ClientesService],
})
export class AppModule { }
