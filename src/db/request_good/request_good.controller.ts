import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { RequestGoodService } from './request_good.service';
import { CreateRequestGoodDto } from './dto/create-request_good.dto';
import { UpdateRequestGoodDto } from './dto/update-request_good.dto';

@Controller('request_good')
export class RequestGoodController {
  constructor(private readonly requestGoodService: RequestGoodService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createRequestGoodDto: CreateRequestGoodDto) {
    return this.requestGoodService.create(createRequestGoodDto);
  }

  @Get()
  findAll() {
    return this.requestGoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestGoodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestGoodDto: UpdateRequestGoodDto) {
    return this.requestGoodService.update(+id, updateRequestGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestGoodService.remove(+id);
  }
}
