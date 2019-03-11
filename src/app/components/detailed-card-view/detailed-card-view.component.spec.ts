import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCardViewComponent } from './detailed-card-view.component';

describe('DetailedCardViewComponent', () => {
  let component: DetailedCardViewComponent;
  let fixture: ComponentFixture<DetailedCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
