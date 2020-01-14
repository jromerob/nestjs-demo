
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule } from 'nestjs-admin';
import { TutorialsModule } from './entities/tutorials/tutorials.module';
import { ClientesModule } from './entities/clientes/clientes.module';
import { EmpresasModule } from './entities/empresa/empresa.module';
import { EmpresaDireccionesModule } from './entities/empresa_direcciones/empresa_direcciones.module';
import { LoggerMiddleware } from './dtos/middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(),
    TutorialsModule, ClientesModule, EmpresasModule, EmpresaDireccionesModule,
    DefaultAdminModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule implements NestModule {
  // Configuracion del Middleware para loggear llamadas a la ruta de clientes
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('clientes');
  }
}
