import { Test, TestingModule } from '@nestjs/testing';
import { WebServiceController } from './web-service.controller';
import { WebServiceService } from './web-service.service';

describe('WebServiceController', () => {
  let webServiceController: WebServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebServiceController],
      providers: [WebServiceService],
    }).compile();

    webServiceController = app.get<WebServiceController>(WebServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(webServiceController.getHello()).toBe('Hello World!');
    });
  });
});
