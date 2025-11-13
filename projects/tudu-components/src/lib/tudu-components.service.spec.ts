import { TestBed } from '@angular/core/testing';

import { TuduComponentsService } from './tudu-components.service';

describe('TuduComponentsService', () => {
  let service: TuduComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuduComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
