import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { Adress } from 'src/entities/Adress.entity';
import { File } from 'src/entities/File.entity';
import { UserPayement } from 'src/entities/UserPayement.entity';

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

  @Expose()
  @ApiProperty()
  adress: Adress[];

  @Expose()
  @ApiProperty()
  file: File;

  @Expose()
  @ApiProperty()
  userPayement: UserPayement[];
}
