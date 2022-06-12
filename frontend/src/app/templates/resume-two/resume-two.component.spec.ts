import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTwoComponent } from './resume-two.component';

describe('ResumeTwoComponent', () => {
  let component: ResumeTwoComponent;
  let fixture: ComponentFixture<ResumeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
