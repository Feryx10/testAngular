import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuplasComponent } from './tuplas.component';

describe('TuplasComponent', () => {
  let component: TuplasComponent;
  let fixture: ComponentFixture<TuplasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuplasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
