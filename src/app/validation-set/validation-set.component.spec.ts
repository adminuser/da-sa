import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSetComponent } from './validation-set.component';

describe('ValidationSetComponent', () => {
  let component: ValidationSetComponent;
  let fixture: ComponentFixture<ValidationSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
