import { Component, OnInit, inject } from '@angular/core';
import { JobSearchService } from '../services/job-search.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule ,HttpClientModule,RouterOutlet],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
 public jobList: Job[] = [];
 public favoriteJobs: Job[] = [];

  constructor( private router: Router,private jobservicesList:JobSearchService) {}
 
  ngOnInit(): void {

    this.jobservicesList.getJobs().subscribe(data => {
      this.jobList = data;
      this.loadFavorites();
    });

  }

  toggleFavorite(job: Job): void {
    const index = this.favoriteJobs.findIndex(fav => fav.id === job.id);
    if (index !== -1) {
      this.favoriteJobs.splice(index, 1);
    } else {
      this.favoriteJobs.push(job);
    }
    localStorage.setItem('favoriteJobs', JSON.stringify(this.favoriteJobs));
  }


  loadFavorites(): void {
    const favorites = localStorage.getItem('favoriteJobs');
    if (favorites) {
      this.favoriteJobs = JSON.parse(favorites);
    }
  }

  isFavorite(jobId: string): boolean {
    return this.favoriteJobs.some(job => job.id === jobId);
  }

  navigateToJobDetail(jobId:string){
    this.router.navigate([`/jobs/${jobId}`]);
  }

}
