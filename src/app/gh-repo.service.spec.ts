import { TestBed } from '@angular/core/testing';

import { GhRepoService } from './gh-repo.service';

describe('GhRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhRepoService = TestBed.get(GhRepoService);
    expect(service).toBeTruthy();
  });
});
