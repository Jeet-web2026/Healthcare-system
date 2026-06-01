import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisatonDetailsModule } from './modules/organisaton-details/organisaton-details.module';
import { OrganisationDetailsService } from './modules/organisaton-details/service/organisation-details.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [OrganisatonDetailsModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OrganisationDetailsService],
})
export class AppModule {}
