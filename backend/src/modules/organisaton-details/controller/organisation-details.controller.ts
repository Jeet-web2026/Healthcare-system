import { Controller, Get } from '@nestjs/common';
import { OrganisationDetailsService } from '../service/organisation-details.service';

@Controller('organisation-details')
export class OrganisationDetailsController {

    constructor(private readonly organisationDetailsService: OrganisationDetailsService) {}

  @Get()
  getOrganisationDetails(){
    return this.organisationDetailsService.getOrganisationDetails();
  }
}