import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import { Express } from 'express';
import { File } from 'src/entities/File.entity';
import { FileService } from '../file.service';
import { GetOneFileSerializer } from './serializer/GetOneFileSerializer';
import { diskStorageConfig } from '../DiskStorageConfig';

@Crud({
  model: {
    type: File,
  },
  serialize: {
    get: GetOneFileSerializer,
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
    join: {
      file: {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('file')
export class FileAdminController implements CrudController<File> {
  constructor(public service: FileService) {}

  @UseInterceptors(FileInterceptor('file', diskStorageConfig))
  @Override()
  createOne(@UploadedFile() file: Express.Multer.File) {
    return this.service.CreateFile(file);
  }
}
