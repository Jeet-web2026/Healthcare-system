import { Controller, Get } from '@nestjs/common';
import { WebServiceService } from './web-service.service';

@Controller()
export class WebServiceController {
  constructor(private readonly webServiceService: WebServiceService) {}

  @Get()
  getHello(): string {
    return this.webServiceService.getHello();
  }
}
