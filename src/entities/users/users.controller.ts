import { Controller, Get, Post, Body, Header, Param, Res, NotFoundException, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CustomResponse } from '../../dtos/custom-response';
import { ApiTags, ApiCreatedResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Http2ServerResponse } from 'http2';

@Controller('users')
@ApiTags('Usuarios')
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    @Get()
    @ApiCreatedResponse({
        description: 'Listado de clientes',
        type: User,
        isArray: true,
    })
    getAll(): Promise<User[]> {
        return this.usersService.getAll();

    }
    /**
     * Retorna 404 cuando no se encuentra (EVITAR)
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf ClientesController
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
     * @memberOf ClientesController
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
     * @memberOf ClientesController
     */
    // @Get(':id')
    // @ApiResponse({ status: 200, description: 'OK' })
    // @ApiResponse({ status: 204, description: 'Sin contenido' })
    // async  findOne(@Param('id') id: number, @Res() res) {
    //     const out = await this.clientesService.get(id);
    //     if (out) {
    //         res.send(out);
    //     } else {
    //         throw new HttpException('Cliente no encontrado', 204);
    //     }
    // }

    /**
     * Retorna lanza excepción con status 204
     *
     * @param {number} id
     * @param {any} res
     *
     * @memberOf ClientesController
     */
    @Get(':id')
    @ApiResponse({ status: 200, description: 'OK' })
    @ApiResponse({ status: 204, description: 'Cliente no encontrado' })
    @ApiCreatedResponse({ description: 'Detalle de cliente', type: User, isArray: false })
    async findOne(@Param('id') id: number, @Res() res) {
        const out = await this.usersService.get(id);
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
    public saveCliente(@Body() cliente: User): CustomResponse {
        return this.usersService.save(cliente);

    }
}
