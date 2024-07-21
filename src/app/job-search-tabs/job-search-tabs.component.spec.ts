import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchTabsComponent } from './job-search-tabs.component';

describe('JobSearchTabsComponent', () => {
  let component: JobSearchTabsComponent;
  let fixture: ComponentFixture<JobSearchTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSearchTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSearchTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
