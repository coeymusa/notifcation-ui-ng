import { TestBed } from '@angular/core/testing';

import { TriggerServiceService } from './trigger-service.service';

describe('TriggerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriggerServiceService = TestBed.get(TriggerServiceService);
    expect(service).toBeTruthy();
  });
});
