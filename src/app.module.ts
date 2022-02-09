import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AddressModule,
  CategoryModule,
  FileModule,
  InventoryModule,
  ProductModule,
  UserModule,
} from './modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ecommerce_admin',
      password: '0000',
      database: 'ecommerce',
      entities: ['src/**/**.entity.js', 'dist/**/**.entity.js'],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ProductModule,
    InventoryModule,
    FileModule,
    CategoryModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
