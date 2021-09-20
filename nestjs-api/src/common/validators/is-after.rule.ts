import {
  buildMessage,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { parseISO } from 'date-fns';
import id from 'date-fns/locale/id/index.js';
import { type } from 'node:os';

export function IsAfter(field, validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsAfter',
      constraints: [field],
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      
      validator: {
        validate(value: any, args: ValidationArguments) {
          return parseISO(value) > parseISO(args.object[args.constraints[0]]);
        },
        defaultMessage: buildMessage(
          (eachPrefix, args: ValidationArguments) =>
            `${eachPrefix}$property must after than ${args.constraints[0]}`,
          validationOptions,
        ),
      },
    });
  };
}
