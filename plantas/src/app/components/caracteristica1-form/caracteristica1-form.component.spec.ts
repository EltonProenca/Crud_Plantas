import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caracteristica1FormComponent } from './caracteristica1-form.component';

describe('Caracteristica1FormComponent', () => {
  let component: Caracteristica1FormComponent;
  let fixture: ComponentFixture<Caracteristica1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caracteristica1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caracteristica1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
