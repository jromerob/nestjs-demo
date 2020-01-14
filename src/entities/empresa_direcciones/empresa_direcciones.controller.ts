import { Controller, Get, Post, Body, Header, Param, Res, NotFoundException, HttpException } from '@nestjs/common';
import { EmpresaDireccion } from './empresa_direccion.entity';
import { ApiTags, ApiCreatedResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Http2ServerResponse } from 'http2';
import { EmpresaDireccionesService } from './empresa_direcciones.service';
import { CustomResponse } from '../../dtos/custom-response';

@Controller('empresas_direcciones')
@ApiTags('empresas_direcciones')
export class EmpresasDireccionesController {

    constructor(private readonly empresaDireccionesService: EmpresaDireccionesService) {

    }

    @Get()
    @ApiCreatedResponse({
        description: 'Listado de direcciones de empresas',
        type: EmpresaDireccion,
        isArray: true,
    })
    getAll(): Promise<EmpresaDireccion[]> {
        return this.empresaDireccionesService.getAll();

    }
    /**
     * Retorna 404 cuando no se encuentra (EVITAR)
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasDireccionesController
     */
    // @Get(':id')
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.clientesService.get(id);
    //     if (out) {
    //         res.send(out);
    //     } else {
    //         throw new NotFoundException();
    //     }

    // }

    /**
     * Retorna status 204 cuando no se encuentra
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasDireccionesController
     */
    // @Get(':id')
    // @ApiResponse({ status: 200, description: 'OK' })
    // @ApiResponse({ status: 204, description: 'Sin contenido' })
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.clientesService.get(id);
    //     if (out) {
    //         res.send(out);
    //     } else {
    //         res.statusCode = 204;
    //         res.send();
    //     }

    // }

    /**
     * Retorna lanza excepción con status 204
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasDireccionesController
     */
    // @Get(':id')
    // @ApiResponse({ status: 200, description: 'OK' })
    // @ApiResponse({ status: 204, description: 'Sin contenido' })
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.clientesService.get(id);
    //     if (out) {
    //         res.send(out);
    //     } else {
    //         throw new HttpException('EmpresaDireccion no encontrado', 204);
    //     }
    // }

    /**
     * Retorna lanza excepción con status 204
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasDireccionesController
     */
    @Get(':id')
    @ApiResponse({ status: 200, description: 'OK' })
    @ApiResponse({ status: 204, description: 'EmpresaDireccion no encontrado' })
    @ApiCreatedResponse({ description: 'Detalle de empresaDireccion', type: EmpresaDireccion, isArray: false })
    async findOne(@Param('id') id: number, @Res() res) {
        const out = await this.empresaDireccionesService.get(id);
        if (out) {
            res.send(out);
        } else {
            res.send({
                status: 204,
                message: 'no encontrado',
            });
        }
    }

    @Post()
    @Header('Cache-Control', 'none')
    public saveCliente(@Body() empresaDireccion: EmpresaDireccion): CustomResponse {
        return this.empresaDireccionesService.save(empresaDireccion);

    }
}
