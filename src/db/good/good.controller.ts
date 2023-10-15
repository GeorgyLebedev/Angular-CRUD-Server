import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
import { GoodService } from './good.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';

@Controller('good')
export class GoodController {
  constructor(private readonly goodService: GoodService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createGoodDto: CreateGoodDto) {
    return this.goodService.create(createGoodDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (Object.keys(query).length > 0)
      return this.goodService.findWithCondition(query)
    else
      return this.goodService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodDto: UpdateGoodDto) {
    return this.goodService.update(+id, updateGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodService.remove(+id);
  }
}
