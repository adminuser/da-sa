import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgsAddComponent } from './dgs-add.component';

describe('DgsAddComponent', () => {
  let component: DgsAddComponent;
  let fixture: ComponentFixture<DgsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
