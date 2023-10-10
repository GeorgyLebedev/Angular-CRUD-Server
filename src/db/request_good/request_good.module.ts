import { Module } from '@nestjs/common';
import { RequestGoodService } from './request_good.service';
import { RequestGoodController } from './request_good.controller';
import {RequestGood} from "./entities/request_good.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([RequestGood])],
  controllers: [RequestGoodController],
  providers: [RequestGoodService],
})
export class RequestGoodModule {}
