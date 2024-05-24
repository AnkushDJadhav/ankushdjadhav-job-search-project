import { Component } from '@angular/core';
import { Job } from '../../Models/job';
import { JobService } from '../../Services/job.service';
import { OnInit  } from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
jobList :Job[]=[];
favouritesJobID :number[]=[];

constructor(private jobService :JobService){

}
  
  
ngOnInit(): void {
  this.jobService.getAllJobs().subscribe(responseData=>{
  this.jobList=responseData;
  });
 
  let savedFavorites= localStorage.getItem("myFavorites");
  if(savedFavorites){
    this.favouritesJobID=JSON.parse(savedFavorites);  
  }
 
  }

 

  AddOrRemoveFavourite(JobID :number){
  let currentJobSelect=this.jobList[JobID];
  let element = document.getElementById("star-"+currentJobSelect.id);

  if(currentJobSelect)
    { 
      if(this.favouritesJobID)
      {    
       let InFavArray= this.favouritesJobID.findIndex(
        (number: number) => number === currentJobSelect.id
       );
   
      if(InFavArray < 0)
      {
        //Not in Favourites Array. Add the Job to Favourite   
        this.favouritesJobID.push(currentJobSelect.id);
       if(element)
        {
          element.classList.add('active');        
        }
      }
      else{
        //Already in Favourites Array. Remove the Job from Favourite List       
        this.favouritesJobID.splice(InFavArray,1);
       if(element)
        {
          element.classList.remove('active');        
        }
      }   
      }
        
      localStorage.setItem("myFavorites",JSON.stringify(this.favouritesJobID));
     
    }
  }

}
