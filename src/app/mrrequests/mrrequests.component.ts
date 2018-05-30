import { Component, OnInit } from '@angular/core';

import { Mrrequest } from '../model/mrrequest';
import { MrrequestService } from '../mrrequest.service';

@Component({
  selector: 'app-mrrequests',
  templateUrl: './mrrequests.component.html',
  styleUrls: ['./mrrequests.component.css']
})
export class MrrequestsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'id'
      },
      country: {
        title: 'country'
      },
      region: {
        title: 'region'
      },
      lob: {
        title: 'lob'
      },
      topic: {
        title: 'topic'
      },
      speakerName: {
        title: 'speakerName'
      },
      submittedDate: {
        title: 'submittedDate'
      },
      daysLeftToMeetSla: {
        title: 'daysLeftToMeetSla'
      },
      status: {
        title: 'status'
      }
    }
  }

  mrrequests: Mrrequest[];

  constructor(private mrRequestService: MrrequestService) { }

  ngOnInit() {
    this.getMrRequests();
  }

  getMrRequests(): void {
    console.log("mrrequest.component: getMrRequests()")
    // this.heroes = this.heroService.getHeroes();
    this.mrRequestService.getMrrequest()
    .subscribe(mrrequests => this.mrrequests = mrrequests.slice(0, 5));
  }

}
