import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class FileSerializer {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  path: String;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  alt: string;

  @Expose()
  @ApiProperty()
  mime_type: string;
}
