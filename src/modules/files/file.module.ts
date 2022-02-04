import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from 'src/entities/File.entity';
import { FileAdminController } from './admin/file.admin.controller';
import { FileService } from './file.service';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileAdminController],
  providers: [FileService],
})
export class FileModule {}
