import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CrudValidationGroups } from '@nestjsx/crud';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { error } from 'console';
import { User } from 'src/entities/User.entity';
import { CreateOneUser } from 'src/modules/users/dto/CreateOneUser';

@Injectable()
export class DtoValidationPipe implements PipeTransform {
  async transform(entity: any, metadata: ArgumentMetadata) {
    // Dynamically determine the groups
    const groups = [];
    if (entity.selectedCategory === 1) {
      groups.push('registration');
    }

    // Transform to class with groups
    const entityClass = plainToClass(CreateOneUser, entity);

    // Validate with groups
    const errors = await validate(entityClass, { groups });
    if (errors.length > 0) {
      console.log(errors[0]);
    }
    return entityClass;
  }
}
