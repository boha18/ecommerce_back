import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { Address } from 'src/entities/Address.entity';
import { File } from 'src/entities/File.entity';
import { UserPayment } from 'src/entities/UserPayment.entity';
import { UserType } from 'src/Utility/Groups/UserType';
const { ADMIN, USER } = UserType;

@Exclude()
export class UserSerializer {
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
  address: Address[];

  @Expose()
  @ApiProperty()
  file: File;

  @Expose()
  @ApiProperty()
  userPayment: UserPayment[];
}
