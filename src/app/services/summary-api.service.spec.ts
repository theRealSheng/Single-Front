import { TestBed, inject } from '@angular/core/testing';

import { SummaryApiService } from './summary-api.service';

describe('SummaryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryApiService]
    });
  });

  it('should be created', inject([SummaryApiService], (service: SummaryApiService) => {
    expect(service).toBeTruthy();
  }));
});
