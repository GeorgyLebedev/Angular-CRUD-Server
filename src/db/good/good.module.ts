import { Module } from '@nestjs/common';
import { GoodService } from './good.service';
import { GoodController } from './good.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Good} from "./entities/good.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Good])],
  controllers: [GoodController],
  providers: [GoodService],
})
export class GoodModule {}
