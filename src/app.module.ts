import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AddressModule,
  CategoryModule,
  CommentModule,
  DiscountModule,
  FavoriteModule,
  FileModule,
  InventoryModule,
  NotationModule,
  OrderItemModule,
  ProductModule,
  UserModule,
} from './modules';
import { AuthModule } from './modules/auth/auth.module';

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
    CommentModule,
    DiscountModule,
    FavoriteModule,
    NotationModule,
    OrderItemModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
