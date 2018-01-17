import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFileDetailsComponent } from './user-file-details.component';

describe('UserFileDetailsComponent', () => {
  let component: UserFileDetailsComponent;
  let fixture: ComponentFixture<UserFileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
