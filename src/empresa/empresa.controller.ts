import { Controller, Get, Post, Body, Header, Param, Res, NotFoundException, HttpException } from '@nestjs/common';
import { EmpresasService } from './empresa.service';
import { Empresa } from './empresa.entity';
import { CustomResponse } from '../dtos/custom-response';
import { ApiTags, ApiCreatedResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Http2ServerResponse } from 'http2';

@Controller('empresas')
@ApiTags('empresas')
export class EmpresasController {

    constructor(private readonly empresaService: EmpresasService) {

    }

    @Get()
    @ApiCreatedResponse({
        description: 'Listado de empresa',
        type: Empresa,
        isArray: true,
    })
    getAll(): Promise<Empresa[]> {
        return this.empresaService.getAll();

    }
    /**
     * Retorna 404 cuando no se encuentra (EVITAR)
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasController
     */
    // @Get(':id')
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.empresaService.get(id);
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
     * @memberOf EmpresasController
     */
    // @Get(':id')
    // @ApiResponse({ status: 200, description: 'OK' })
    // @ApiResponse({ status: 204, description: 'Sin contenido' })
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.empresaService.get(id);
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
     * @memberOf EmpresasController
     */
    // @Get(':id')
    // @ApiResponse({ status: 200, description: 'OK' })
    // @ApiResponse({ status: 204, description: 'Sin contenido' })
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.empresaService.get(id);
    //     if (out) {
    //         res.send(out);
    //     } else {
    //         throw new HttpException('Empresa no encontrado', 204);
    //     }
    // }

    /**
     * Retorna lanza excepción con status 204
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf EmpresasController
     */
    @Get(':id')
    @ApiResponse({ status: 200, description: 'OK' })
    @ApiResponse({ status: 204, description: 'Empresa no encontrado' })
    @ApiCreatedResponse({ description: 'Detalle de cliente', type: Empresa, isArray: false })
    async findOne(@Param('id') id: number, @Res() res) {
        const out = await this.empresaService.get(id);
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
    public saveCliente(@Body() cliente: Empresa): CustomResponse {
        return this.empresaService.save(cliente);

    }
}
