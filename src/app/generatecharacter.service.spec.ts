import { TestBed } from '@angular/core/testing';

import { GeneratecharacterService } from './generatecharacter.service';

describe('GeneratecharacterService', () => {
  let service: GeneratecharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratecharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
