import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeOneComponent } from './resume-one.component';

describe('ResumeOneComponent', () => {
  let component: ResumeOneComponent;
  let fixture: ComponentFixture<ResumeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
