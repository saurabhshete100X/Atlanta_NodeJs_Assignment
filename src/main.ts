import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add express-session middleware
  app.use(session({
    secret: 'yourSecretKey', // Replace with a secure secret
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // 1 hour
  }));

  await app.listen(6000);
}
bootstrap();
