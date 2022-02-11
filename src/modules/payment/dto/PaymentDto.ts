import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = 'The field cannot be empty. Please enter a value';

export class PaymentDto {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  amount: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  provider: String;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  status: String;
}
