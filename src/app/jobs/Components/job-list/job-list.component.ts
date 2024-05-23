import { Component } from '@angular/core';
import { Job } from '../../Models/job';
import { JobService } from '../../Services/job.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
jobList :Job[]=[];

constructor(private jobService :JobService){}
  
ngOnInit(): void {
  this.jobService.getAllJobs().subscribe(responseData=>{
  this.jobList=responseData;
  });

 
  }



}
