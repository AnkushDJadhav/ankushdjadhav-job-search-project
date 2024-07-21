import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobSearchTabsComponent } from './job-search-tabs/job-search-tabs.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobSearchTabsComponent,CommonModule ,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
