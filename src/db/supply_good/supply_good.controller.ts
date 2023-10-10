import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { SupplyGoodService } from './supply_good.service';
import { CreateSupplyGoodDto } from './dto/create-supply_good.dto';
import { UpdateSupplyGoodDto } from './dto/update-supply_good.dto';

@Controller('supply_good')
export class SupplyGoodController {
  constructor(private readonly supplyGoodService: SupplyGoodService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createSupplyGoodDto: CreateSupplyGoodDto) {
    return this.supplyGoodService.create(createSupplyGoodDto);
  }

  @Get()
  findAll() {
    return this.supplyGoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplyGoodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplyGoodDto: UpdateSupplyGoodDto) {
    return this.supplyGoodService.update(+id, updateSupplyGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplyGoodService.remove(+id);
  }
}
