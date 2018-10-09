import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgsDetailComponent } from './dgs-detail.component';

describe('DgsDetailComponent', () => {
  let component: DgsDetailComponent;
  let fixture: ComponentFixture<DgsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
