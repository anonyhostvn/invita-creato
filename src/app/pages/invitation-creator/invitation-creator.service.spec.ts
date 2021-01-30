import {TestBed} from '@angular/core/testing';

import {InvitationCreatorService} from './invitation-creator.service';

describe('InvitationCreatorService', () => {
  let service: InvitationCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
