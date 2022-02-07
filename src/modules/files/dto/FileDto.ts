import { CrudValidationGroups } from '@nestjsx/crud';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;
const MessErrNotEmpty = ' cannot be empty. Please enter a value';

@Exclude()
export class FileDto {
  @Expose({ groups: ['ADMIN', 'USER'] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE], message: 'path' + MessErrNotEmpty })
  @ApiProperty()
  path: String;

  @Expose({ groups: ['ADMIN', 'USER'] })
  @IsOptional({ groups: [UPDATE] })
  @ApiProperty()
  @IsNotEmpty({ groups: [CREATE, UPDATE], message: 'name' + MessErrNotEmpty })
  name: string;

  @Expose({ groups: ['ADMIN', 'USER'] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE], message: 'alt' + MessErrNotEmpty })
  @ApiProperty()
  alt: string;

  @Expose({ groups: ['ADMIN', 'USER'] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
    message: 'mime_type' + MessErrNotEmpty,
  })
  @ApiProperty()
  mime_type: string;
}
