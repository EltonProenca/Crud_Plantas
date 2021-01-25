import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasCruzeComponent } from './plantas-cruze.component';

describe('PlantasCruzeComponent', () => {
  let component: PlantasCruzeComponent;
  let fixture: ComponentFixture<PlantasCruzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasCruzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasCruzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
