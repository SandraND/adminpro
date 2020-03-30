import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphs1Component } from './graphs1.component';

describe('Graphs1Component', () => {
  let component: Graphs1Component;
  let fixture: ComponentFixture<Graphs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
