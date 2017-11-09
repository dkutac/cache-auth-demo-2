import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDealsComponent } from './private-deals.component';

describe('PrivateDealsComponent', () => {
  let component: PrivateDealsComponent;
  let fixture: ComponentFixture<PrivateDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
