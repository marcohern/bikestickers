import { TestBed, inject } from '@angular/core/testing';

import { BikeLangService } from './bike-lang.service';

describe('BikeLangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeLangService]
    });
  });

  it('should be created', inject([BikeLangService], (service: BikeLangService) => {
    expect(service).toBeTruthy();
  }));
});
