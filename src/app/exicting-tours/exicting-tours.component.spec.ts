import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExictingToursComponent } from './exicting-tours.component';

describe('ExictingToursComponent', () => {
  let component: ExictingToursComponent;
  let fixture: ComponentFixture<ExictingToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExictingToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExictingToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
