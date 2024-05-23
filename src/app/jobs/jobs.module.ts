import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { JobService } from './Services/job.service';


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
    HttpClientModule
  ]
 
})
export class JobsModule { }
