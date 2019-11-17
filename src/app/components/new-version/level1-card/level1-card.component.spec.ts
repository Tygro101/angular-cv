import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1CardComponent } from './level1-card.component';

describe('Level1CardComponent', () => {
  let component: Level1CardComponent;
  let fixture: ComponentFixture<Level1CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
