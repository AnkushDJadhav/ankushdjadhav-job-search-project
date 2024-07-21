import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSearchService } from '../services/job-search.service';
import { CommonModule } from '@angular/common';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-job-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css'
})
export class JobDetailsPageComponent implements OnInit{
  public job: Job = {} as Job;
  constructor( private router: Router,private jobservicesList:JobSearchService,private route: ActivatedRoute){}

  ngOnInit(): void {
    const jobId= this.route.snapshot.params['jobId']
    this.jobservicesList.getJobById(jobId).subscribe(data => {
      this.job = data;
    });
  }

  goBack(){
    this.router.navigate(['/jobs']);
  }
}
