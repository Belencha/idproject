import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptorComponent } from './interruptor.component';

describe('InterruptorComponent', () => {
  let component: InterruptorComponent;
  let fixture: ComponentFixture<InterruptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
