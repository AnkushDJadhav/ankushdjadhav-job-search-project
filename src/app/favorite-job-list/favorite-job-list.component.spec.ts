import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJobListComponent } from './favorite-job-list.component';

describe('FavoriteJobListComponent', () => {
  let component: FavoriteJobListComponent;
  let fixture: ComponentFixture<FavoriteJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteJobListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
