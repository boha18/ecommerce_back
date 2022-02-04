import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { QueryFailedExceptionFilter } from './Utility/QueryFailedExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ecommerce Backend')
    .setDescription('Ecommerce Backend API description')
    .setVersion('1.0')
    .addTag('Ecommerce')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new QueryFailedExceptionFilter());
  await app.listen(3000);
}
bootstrap();
