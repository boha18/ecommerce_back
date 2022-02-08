import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from 'src/entities/File.entity';
import { FileAdminController } from './file.admin.controller';
import { FileService } from './file.service';
import { FileUserController } from './file.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileAdminController, FileUserController],
  providers: [FileService],
})
export class FileModule {}
