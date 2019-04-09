import { TestBed } from '@angular/core/testing';

import { PlantsService } from './plants.service';

describe('PlantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [PlantsService]}));

  it('should be created', () => {
    const service: PlantsService = TestBed.get(PlantsService);
    expect(service).toBeTruthy();
  });
});
