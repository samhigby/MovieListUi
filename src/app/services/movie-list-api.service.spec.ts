import { TestBed } from '@angular/core/testing';

import { MovieListApiService } from './movie-list-api.service';

describe('MovieListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListApiService = TestBed.get(MovieListApiService);
    expect(service).toBeTruthy();
  });
});
