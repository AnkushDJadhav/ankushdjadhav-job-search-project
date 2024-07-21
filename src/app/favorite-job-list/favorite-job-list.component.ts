import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-favorite-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-job-list.component.html',
  styleUrl: './favorite-job-list.component.css'
})
export class FavoriteJobListComponent implements OnInit {

  public favoriteJobs: Job[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const favorites = localStorage.getItem('favoriteJobs');
    if (favorites) {
      this.favoriteJobs = JSON.parse(favorites);
    }
  }


}

