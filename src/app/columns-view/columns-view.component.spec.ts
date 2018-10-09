import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsViewComponent } from './columns-view.component';

describe('ColumnsViewComponent', () => {
  let component: ColumnsViewComponent;
  let fixture: ComponentFixture<ColumnsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
