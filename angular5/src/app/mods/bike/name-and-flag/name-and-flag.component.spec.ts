import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndFlagComponent } from './name-and-flag.component';

describe('NameAndFlagComponent', () => {
  let component: NameAndFlagComponent;
  let fixture: ComponentFixture<NameAndFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameAndFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAndFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
