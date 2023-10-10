import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { OrderGoodService } from './order_good.service';
import { CreateOrderGoodDto } from './dto/create-order_good.dto';
import { UpdateOrderGoodDto } from './dto/update-order_good.dto';

@Controller('order_good')
export class OrderGoodController {
  constructor(private readonly orderGoodService: OrderGoodService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createOrderGoodDto: CreateOrderGoodDto) {
    return this.orderGoodService.create(createOrderGoodDto);
  }

  @Get()
  findAll() {
    return this.orderGoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderGoodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderGoodDto: UpdateOrderGoodDto) {
    return this.orderGoodService.update(+id, updateOrderGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderGoodService.remove(+id);
  }
}
