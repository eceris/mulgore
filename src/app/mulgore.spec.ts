import { TestBed } from '@angular/core/testing';

import { Mulgore } from './mulgore';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [Mulgore]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(Mulgore);
    expect(fixture.componentInstance instanceof Mulgore).toBe(true, 'should create AppComponent');
  });
});
