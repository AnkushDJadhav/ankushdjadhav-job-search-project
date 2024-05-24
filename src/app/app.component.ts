import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
  title = 'ng-job-search';
  changeColor()
  {   
    let element=document.getElementById('btnJob');   
    let favElement=document.getElementById('btnFav');  
    if(element){
      element.style.backgroundColor ="yellowgreen";
      if(favElement){
        favElement.style.backgroundColor ="white";
      }
     
    }
  }

  changeFavColor(){
    let element=document.getElementById('btnFav');  
    let jobElement=document.getElementById('btnJob');   
    if(element){
      element.style.backgroundColor ="yellowgreen";
      if(jobElement)
        {
          jobElement.style.backgroundColor ="white";
        }
    }
  }
}
