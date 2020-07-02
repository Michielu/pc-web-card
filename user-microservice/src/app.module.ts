import { Module } from '@nestjs/common';
import AppControllers from './controllers/index.controller';
import AppProviders from './providers/index.providers';

@Module({
  imports: [],
  controllers: AppControllers,
  providers: AppProviders
})
export class AppModule { }
