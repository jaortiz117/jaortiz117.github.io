import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePopupComponent } from './resume-popup.component';

describe('ResumePopupComponent', () => {
  let component: ResumePopupComponent;
  let fixture: ComponentFixture<ResumePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
