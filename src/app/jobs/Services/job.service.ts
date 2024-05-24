import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../Models/job';
import { JobDetail } from '../Models/job-detail';

@Injectable({
  providedIn: 'root'
})
export class JobService {
 private apiUrl = '/jobs';


  constructor(private http :HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobDetails(id: string): Observable<JobDetail> {
    return this.http.get<JobDetail>(this.apiUrl + "/" + id);

  }
}
