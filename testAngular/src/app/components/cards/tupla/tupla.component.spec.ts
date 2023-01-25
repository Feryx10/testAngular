import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuplaComponent } from './tupla.component';

describe('TuplaComponent', () => {
  let component: TuplaComponent;
  let fixture: ComponentFixture<TuplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuplaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
