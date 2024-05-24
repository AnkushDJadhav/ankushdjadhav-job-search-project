import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { JobDetail } from '../../Models/job-detail';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{
  jobDetail :JobDetail[]=[];

  constructor(private jobService :JobService){}

  ngOnInit(): void {
    this.jobService.getJobDetails(75278).subscribe(responseData=>{     
      this.jobDetail[0]=responseData;
      console.log(this.jobDetail[0]);
  });
 
  }

  
}
