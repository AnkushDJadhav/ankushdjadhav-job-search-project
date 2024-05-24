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
favoritesJobList :Job[]=[];
favouritesJobID :number[]=[];

constructor(private jobService :JobService){}
  
ngOnInit(): void {
  this.jobService.getAllJobs().subscribe(responseData=>{
  this.jobList=responseData;
  });

 
  }

  AddOrRemoveFavourite(JobID :number){
  let currentJobSelect=this.jobList[JobID];
  if(currentJobSelect)
    {      
      let element = document.getElementById("star-"+currentJobSelect.id);
     
      if(element)
        {
          element.classList.add('active');
        }
    }
  }

}
