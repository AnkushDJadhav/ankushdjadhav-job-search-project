import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobListComponent } from '../job-list/job-list.component';
import { FavoriteJobListComponent } from '../favorite-job-list/favorite-job-list.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-job-search-tabs',
  standalone: true,
  imports: [CommonModule,JobListComponent,FavoriteJobListComponent,RouterOutlet],
  templateUrl: './job-search-tabs.component.html',
  styleUrl: './job-search-tabs.component.css',
})
export class JobSearchTabsComponent implements OnInit{
  public activeTabVal: string = '';
  

 constructor(private router: Router,private route: ActivatedRoute){}

 ngOnInit(): void {

  this.activeTabVal = localStorage.getItem('activeTab') || 'jobListTab';

 }

  

  activeTab(tab: string): void {
    this.activeTabVal = tab;
    localStorage.setItem('activeTab', tab);

    if(this.activeTabVal === 'jobListTab'){
      this.router.navigate(['/jobs']);
    }
    else{
      this.router.navigate(['/favorites']);
    }

  }
}
