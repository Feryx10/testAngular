import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStreamComponent } from './event-stream.component';

describe('EventStreamComponent', () => {
  let component: EventStreamComponent;
  let fixture: ComponentFixture<EventStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
