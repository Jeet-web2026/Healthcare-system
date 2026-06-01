import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisatonDetailsModule } from './modules/organisaton-details/organisaton-details.module';
import { OrganisationDetailsService } from './modules/organisaton-details/service/organisation-details.service';

@Module({
  imports: [OrganisatonDetailsModule],
  controllers: [AppController],
  providers: [AppService, OrganisationDetailsService],
})
export class AppModule {}
