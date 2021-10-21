import { TestBed } from '@angular/core/testing';

import { JsonPHService } from './json-ph.service';

describe('JsonPHService', () => {
  let service: JsonPHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
