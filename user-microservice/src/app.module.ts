import { Module } from '@nestjs/common';
import AppControllers from './controllers/index.controller';
import AppServices from './services/index.services';

@Module({
  imports: [],
  controllers: AppControllers,
  providers: AppServices,
})
export class AppModule { }
