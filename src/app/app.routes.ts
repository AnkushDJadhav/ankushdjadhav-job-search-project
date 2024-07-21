import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoriteJobListComponent } from './favorite-job-list/favorite-job-list.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';

export const routes: Routes = [
    { path: 'jobs', component: JobListComponent },
    { path: 'favorites', component: FavoriteJobListComponent },
    { path: 'jobs/:jobId', component: JobDetailsPageComponent },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: '**', redirectTo: '/jobs' }
  ];