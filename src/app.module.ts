
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialsModule } from './tutorials/tutorials.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TutorialsModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
