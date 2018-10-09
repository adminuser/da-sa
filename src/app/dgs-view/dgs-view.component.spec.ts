import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgsViewComponent } from './dgs-view.component';

describe('DgsViewComponent', () => {
  let component: DgsViewComponent;
  let fixture: ComponentFixture<DgsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
