import { TestBed, inject } from '@angular/core/testing';

import { MrrequestService } from './mrrequest.service';

describe('MrrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MrrequestService]
    });
  });

  it('should be created', inject([MrrequestService], (service: MrrequestService) => {
    expect(service).toBeTruthy();
  }));
});
