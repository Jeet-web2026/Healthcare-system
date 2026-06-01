import { Module } from '@nestjs/common';
import { OrganisationDetailsService } from './service/organisation-details.service';
import { OrganisationDetailsController } from './controller/organisation-details.controller';

@Module({})
@Module({
    controllers: [OrganisationDetailsController],
    providers: [OrganisationDetailsService],
})
export class OrganisatonDetailsModule {
}
