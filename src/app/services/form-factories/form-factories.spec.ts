import { TestBed } from '@angular/core/testing';

import { FormFactories } from './form-factories';

describe('FormFactories', () => {
  let service: FormFactories;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFactories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
