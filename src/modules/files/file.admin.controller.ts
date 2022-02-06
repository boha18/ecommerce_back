import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import { Express } from 'express';
import { File } from 'src/entities/File.entity';
import { FileService } from './file.service';
import { FileSerializer } from './serializer/FileSerializer';
import { diskStorageConfig } from '../../Utility/DiskStorage/DiskStorageConfig';

@Crud({
  model: {
    type: File,
  },
  serialize: {
    get: FileSerializer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    exclude: ['createManyBase'],
  },
  query: {
    alwaysPaginate: true,
  },
})
@Controller('admin/file')
export class FileAdminController implements CrudController<File> {
  constructor(public service: FileService) {}

  @UseInterceptors(FileInterceptor('file', diskStorageConfig))
  @Override()
  createOne(@UploadedFile() file: Express.Multer.File) {
    return this.service.CreateFile(file);
  }
}
