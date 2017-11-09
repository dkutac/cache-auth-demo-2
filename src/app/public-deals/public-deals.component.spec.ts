import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDealsComponent } from './public-deals.component';

describe('PublicDealsComponent', () => {
  let component: PublicDealsComponent;
  let fixture: ComponentFixture<PublicDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
