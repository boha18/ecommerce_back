import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import { Express } from 'express';
import { File } from 'src/entities/File.entity';
import { FileService } from './file.service';
import { FileSerializer } from './serializer/FileSerializer';
import { diskStorageConfig } from '../../Utility/DiskStorage/DiskStorageConfig';
import { FileDto } from './dto/FileDto';

@Crud({
  model: {
    type: File,
  },
  dto: {
    create: FileDto,
  },
  serialize: {
    get: FileSerializer,
    create: FileSerializer,
    delete: FileSerializer,
  },
  validation: {
    transformOptions: { groups: ['USER'] },
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['createOneBase', 'deleteOneBase', 'getOneBase'],
  },
  query: {
    alwaysPaginate: true,
  },
})
@Controller('user/file')
export class FileAdminController implements CrudController<File> {
  constructor(public service: FileService) {}

  @UseInterceptors(FileInterceptor('file', diskStorageConfig))
  @Override()
  createOne(@UploadedFile() file: Express.Multer.File) {
    return this.service.CreateFile(file);
  }
}
