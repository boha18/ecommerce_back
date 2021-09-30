import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetOneUserSerializer {
  @Expose()
  @ApiProperty()
  id: String;

  @Expose()
  @ApiProperty()
  firstName: string;

  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  telephone: string;

  @Expose()
  @ApiProperty()
  isActive: boolean;
}
