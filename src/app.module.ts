
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule } from 'nestjs-admin'
import { TutorialsModule } from './entities/tutorials/tutorials.module';
import { ClientesModule } from './entities/clientes/clientes.module';
import { EmpresasModule } from './entities/empresa/empresa.module';
import { EmpresaDireccionesModule } from './entities/empresa_direcciones/empresa_direcciones.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TutorialsModule, ClientesModule, EmpresasModule, EmpresaDireccionesModule, DefaultAdminModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
