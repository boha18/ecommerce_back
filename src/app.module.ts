import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
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
import { AdminModule } from '@adminjs/nestjs';
import { User } from './entities/User.entity';
import { File } from './entities/File.entity';

AdminJS.registerAdapter({ Database, Resource });
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env.config',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
    AdminModule.createAdmin({
      auth: {
        authenticate: async (email, password) =>
          Promise.resolve({ email: 'test' }),
        cookieName: 'test',
        cookiePassword: 'testPass',
      },
      adminJsOptions: {
        rootPath: '/admin',
        resources: [
          {
            resource: User,
            options: {
              actions: {
                delete: {
                  guard: 'doYouReallyWantToDoThis',
                  label: 'tesst delte ',
                },
              },
            },
          },
          File,
        ],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
