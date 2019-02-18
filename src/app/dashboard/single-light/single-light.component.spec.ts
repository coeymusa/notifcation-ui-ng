import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLightComponent } from './single-light.component';

describe('SingleLightComponent', () => {
  let component: SingleLightComponent;
  let fixture: ComponentFixture<SingleLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
