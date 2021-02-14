import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBindingExampleComponent } from './double-binding-example.component';

describe('DoubleBindingExampleComponent', () => {
  let component: DoubleBindingExampleComponent;
  let fixture: ComponentFixture<DoubleBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
