import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTriggerComponent } from './single-trigger.component';

describe('SingleTriggerComponent', () => {
  let component: SingleTriggerComponent;
  let fixture: ComponentFixture<SingleTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
