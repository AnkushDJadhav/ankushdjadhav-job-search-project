import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/Components/job-list/job-list.component';
import { FavouritesComponent } from './jobs/Components/favourites/favourites.component';
import { JobDetailComponent } from './jobs/Components/job-detail/job-detail.component';

export const routes: Routes = [
    {path:'', component:JobListComponent},
    {path:'jobs', component:JobListComponent},
    {path:'favourites', component:FavouritesComponent},
    {path:'jobs/:id', component:JobDetailComponent}
];
