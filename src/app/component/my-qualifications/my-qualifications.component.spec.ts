import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQualificationsComponent } from './my-qualifications.component';

describe('MyQualificationsComponent', () => {
  let component: MyQualificationsComponent;
  let fixture: ComponentFixture<MyQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQualificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
