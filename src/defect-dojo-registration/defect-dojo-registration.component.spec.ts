import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectDojoRegistrationComponent } from './defect-dojo-registration.component';

describe('DefectDojoRegistrationComponent', () => {
  let component: DefectDojoRegistrationComponent;
  let fixture: ComponentFixture<DefectDojoRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefectDojoRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectDojoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
