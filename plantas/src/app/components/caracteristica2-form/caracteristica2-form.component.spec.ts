import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caracteristica2FormComponent } from './caracteristica2-form.component';

describe('Caracteristica2FormComponent', () => {
  let component: Caracteristica2FormComponent;
  let fixture: ComponentFixture<Caracteristica2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caracteristica2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caracteristica2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
