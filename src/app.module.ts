
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule } from 'nestjs-admin'
import { TutorialsModule } from './tutorials/tutorials.module';
import { ClientesModule } from './clientes/clientes.module';
import { EmpresasModule } from './empresa/empresa.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TutorialsModule, ClientesModule, EmpresasModule, DefaultAdminModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
