import { TestBed, inject } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [RequestService]
    });
  });

  it('should be created', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));

  it('getQueryString() works!', inject([RequestService], (service: RequestService) => {
    let q = service.getQueryString({name:'Marco Hernandez', age:37, gender:'Male' });
    expect(q).toEqual("name=Marco%20Hernandez&age=37&gender=Male");
  }));
});
