import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ResponseInterceptor } from './common/interseptors/response.interceptor';
import { ApiResponse } from './common/interfaces/api-response.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4001;
  app.setGlobalPrefix('api/v1');
   app.use(express.json());
    app.enableCors({
      origin: [
        'http://localhost:5173',
        'http://localhost:3000',
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const methods = ['POST', 'PUT', 'PATCH'];

    if (
      methods.includes(req.method) &&
      !req.is('application/json')
    ) {
      return res.status(415).json({
        statusCode: 415,
        message: 'Only application/json content type is supported',
      });
    }

    next();
  });

  app.useGlobalInterceptors(
    new ResponseInterceptor<ApiResponse<any>>(),
  );
  await app.listen(port);
}
bootstrap();
