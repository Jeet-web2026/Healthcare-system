import { NestFactory } from '@nestjs/core';
import { WebServiceModule } from './web-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WebServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
