import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService:AppService) {}
  
  //TODO http://localhost:3000/
  
  @Get()
  index() {
    return this.appService.getHello()
  }
}
