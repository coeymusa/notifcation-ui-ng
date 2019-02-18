import { TestBed } from '@angular/core/testing';

import { LightServiceService } from './light-service.service';

describe('LightServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LightServiceService = TestBed.get(LightServiceService);
    expect(service).toBeTruthy();
  });
});
