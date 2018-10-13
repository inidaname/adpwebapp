import { TestBed, inject } from '@angular/core/testing';

import { MemberService } from './member.service';

describe('MemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberService]
    });
  });

  it('should be', inject([MemberService], (service: MemberService) => {
    expect(service).toBeTruthy();
  }));
});
