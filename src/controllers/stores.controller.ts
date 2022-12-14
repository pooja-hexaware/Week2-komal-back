import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storesDto } from '../dto/stores-dto.dto';
import { storesService } from '../services/stores.service';


@Controller('stores')
export class storesController {
    constructor(private readonly storesService: storesService) { }

    @Post()
    async create(@Body() storesDto: storesDto) {
        const res = this.storesService.create(storesDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storesService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storesDto: storesDto) {
        return this.storesService.update(id, storesDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storesService.delete(id);
    }
}