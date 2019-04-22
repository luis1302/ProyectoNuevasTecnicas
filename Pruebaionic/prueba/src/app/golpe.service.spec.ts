import { TestBed } from '@angular/core/testing';

import { GolpeService } from './golpe.service';

describe('GolpeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolpeService = TestBed.get(GolpeService);
    expect(service).toBeTruthy();
  });
});
