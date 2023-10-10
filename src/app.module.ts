import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientModule } from './db/client/client.module';
import { ManufacturerModule } from './db/manufacturer/manufacturer.module';
import { GoodModule } from './db/good/good.module';
import { BranchModule } from './db/branch/branch.module';
import { OrderModule } from './db/order/order.module';
import { OrderGoodModule } from './db/order_good/order_good.module';
import { RequestGoodModule } from './db/request_good/request_good.module';
import { RequestModule } from './db/request/request.module';
import { SaleModule } from './db/sale/sale.module';
import { SaleGoodModule } from './db/sale_good/sale_good.module';
import { SupplierModule } from './db/supplier/supplier.module';
import { SupplyModule } from './db/supply/supply.module';
import { SupplyGoodModule } from './db/supply_good/supply_good.module';
import { EmployeeModule } from './db/employee/employee.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_NAME'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ClientModule,
    ManufacturerModule,
    GoodModule,
    BranchModule,
    OrderModule,
    OrderGoodModule,
    RequestGoodModule,
    RequestModule,
    SaleModule,
    SaleGoodModule,
    SupplierModule,
    SupplyModule,
    SupplyGoodModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
