import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { JobDetail } from '../../Models/job-detail';


@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule,RouterModule
 
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{
  jobDetail :JobDetail[]=[];

  constructor(private jobService :JobService, private activatedRoute :ActivatedRoute){}

  ngOnInit(): void {
   let jobIDValue = this.activatedRoute.snapshot.paramMap.get('id');
   
  if(jobIDValue)
  {
    this.jobService.getJobDetails(jobIDValue).subscribe(responseData=>{     
      this.jobDetail[0]=responseData;    
  });

  }
  
 
  }

  
}
