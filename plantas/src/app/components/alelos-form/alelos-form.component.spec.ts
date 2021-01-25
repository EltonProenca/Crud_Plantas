import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlelosFormComponent } from './alelos-form.component';

describe('AlelosFormComponent', () => {
  let component: AlelosFormComponent;
  let fixture: ComponentFixture<AlelosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlelosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlelosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
