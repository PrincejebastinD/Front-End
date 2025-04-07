import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectComponent } from './inspect.component';

describe('InspectComponent', () => {
  let component: InspectComponent;
  let fixture: ComponentFixture<InspectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectComponent]
    });
    fixture = TestBed.createComponent(InspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
