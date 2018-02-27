import { TestBed, inject } from '@angular/core/testing';

import { WarehouseCardService } from './warehouse-card.service';

describe('WarehouseCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehouseCardService]
    });
  });

  it('should be created', inject([WarehouseCardService], (service: WarehouseCardService) => {
    expect(service).toBeTruthy();
  }));
});
