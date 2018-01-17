import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilesComponent } from './event-files.component';

describe('EventFilesComponent', () => {
  let component: EventFilesComponent;
  let fixture: ComponentFixture<EventFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
