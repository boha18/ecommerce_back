import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { url } = request;
    const { name, driverError } = exception;
    console.log(exception);

    const errorResponse = {
      path: url,
      type: name,
      detail: driverError.detail,
      timestamp: new Date().toISOString(),
    };

    response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
  }
}
