import { Controller, Param } from '@nestjs/common';
import { Post, Delete, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { CarritoDTO } from './carrito.dto';
import { Carrito } from './carrito.entity';
import { CarritoService } from './carrito.service';

@Controller('carrito')
export class CarritoController {
    constructor(private carritoService: CarritoService) { }

    @Get("get-all")
    public getAllcarritos(): Promise<Carrito[]>{
        return this.carritoService.getAll();
    }

    @Get(":id")
    public getById(@Param('id') id: number): Promise<Carrito>{
        return this.carritoService.getById(id);
    }

    @Post("new-carrito")
    createArticle(@Body() carritoDto: CarritoDTO): Promise<Carrito> {
        return this.carritoService.addCarrito(carritoDto);
    }

    @Put(":id")
    public updateCarrito(@Body() carritoDto: CarritoDTO, @Param('id') id: number): Promise<Carrito>{
        return this.carritoService.updateCarrito(carritoDto,id);
    }

    @Delete(":id")
    public deleteCarrito(@Param('id') id: number){
        return this.carritoService.deleteCarrito(id);
    }
}
