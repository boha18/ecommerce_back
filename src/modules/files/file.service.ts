import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { File } from 'src/entities/File.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class FileService extends TypeOrmCrudService<File> {
  constructor(
    @InjectRepository(File) private FileRepository: Repository<File>,
  ) {
    super(FileRepository);
  }

  async CreateFile(file: Express.Multer.File): Promise<File> {
    try {
      let newFile = new File();
      newFile.alt = file.originalname;
      newFile.mime_type = file.mimetype;
      newFile.path = file.path;
      newFile.name = file.originalname;
      await this.FileRepository.save(newFile);
      return newFile;
    } catch (error) {
      console.error(error);
    }
  }
}
