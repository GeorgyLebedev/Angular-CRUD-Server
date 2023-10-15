import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
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
  findAll(@Query() query: any) {
    if (Object.keys(query).length > 0)
      return this.requestGoodService.findWithCondition(query)
    else
      return this.requestGoodService.findAll();
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
