import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { JobService } from './Services/job.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    JobListComponent,
    JobDetailComponent,
    FavouritesComponent
  ],
  providers: [
    provideHttpClient(),
    JobService
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterModule,
    Router,
    ActivatedRoute
  ]
 
})
export class JobsModule { }
