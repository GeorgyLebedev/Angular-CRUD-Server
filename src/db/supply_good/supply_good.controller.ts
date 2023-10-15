import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
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
  findAll(@Query() query: any) {
    if (Object.keys(query).length > 0)
      return this.supplyGoodService.findWithCondition(query)
    else
      return this.supplyGoodService.findAll();
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
