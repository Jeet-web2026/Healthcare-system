import { Injectable } from '@nestjs/common';

@Injectable()
export class WebServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
