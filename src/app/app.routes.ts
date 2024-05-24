import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/Components/job-list/job-list.component';
import { FavouritesComponent } from './jobs/Components/favourites/favourites.component';
import { JobDetailComponent } from './jobs/Components/job-detail/job-detail.component';
import { PageNotFoundComponent } from './jobs/Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', component:JobListComponent},
    {path:'jobs',  pathMatch: 'full',  redirectTo: ''},
    {path:'favourites', component:FavouritesComponent},
    {path:'jobs/:id', component:JobDetailComponent},
    {path: '**',  component: PageNotFoundComponent }
];


