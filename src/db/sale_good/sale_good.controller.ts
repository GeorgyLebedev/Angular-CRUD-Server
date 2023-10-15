import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
import { SaleGoodService } from './sale_good.service';
import { CreateSaleGoodDto } from './dto/create-sale_good.dto';
import { UpdateSaleGoodDto } from './dto/update-sale_good.dto';

@Controller('sale_good')
export class SaleGoodController {
  constructor(private readonly saleGoodService: SaleGoodService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createSaleGoodDto: CreateSaleGoodDto) {
    return this.saleGoodService.create(createSaleGoodDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (Object.keys(query).length > 0)
      return this.saleGoodService.findWithCondition(query)
    else
      return this.saleGoodService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleGoodDto: UpdateSaleGoodDto) {
    return this.saleGoodService.update(+id, updateSaleGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleGoodService.remove(+id);
  }
}
