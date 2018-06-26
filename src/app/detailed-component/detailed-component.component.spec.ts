import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedComponentComponent } from './detailed-component.component';

describe('DetailedComponentComponent', () => {
  let component: DetailedComponentComponent;
  let fixture: ComponentFixture<DetailedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
