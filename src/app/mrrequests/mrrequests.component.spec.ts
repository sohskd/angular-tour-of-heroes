import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrequestsComponent } from './mrrequests.component';

describe('MrrequestsComponent', () => {
  let component: MrrequestsComponent;
  let fixture: ComponentFixture<MrrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
