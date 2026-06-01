import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganisationDetailsService {
    async getOrganisationDetails()
    {
        return {
            "id": 2,
        "primaryLocation": "Garden Reach",
        "branches": [
            "Garden Reach",
            "Ramdashatti",
            "Salt Lake"
        ],
        "primaryEmail": "jeetnath2110@gmail.com",
        "secondaryEmails": [
            "demo123@gmail.com"
        ],
        "availableTime": "2026-04-04T18:30:00.000000Z",
        "socialmediainfo": [
            "facebook_link",
            "youtube_link"
        ],
        "termsandconditions": "Lorembvjssjssdksdsdlkksd",
        "privacypolicy": "jsfdghfhbsdsdj",
        "created_at": "2026-04-05T04:47:47.000000Z",
        "updated_at": "2026-04-05T04:47:47.000000Z"
        }
    }
}
