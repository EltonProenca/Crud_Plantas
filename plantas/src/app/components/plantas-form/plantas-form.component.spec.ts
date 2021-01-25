import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasFormComponent } from './plantas-form.component';

describe('PlantasFormComponent', () => {
  let component: PlantasFormComponent;
  let fixture: ComponentFixture<PlantasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
