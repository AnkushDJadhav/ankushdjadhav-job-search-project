import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`/jobs`);
  }

  getJobById(jobId: string): Observable<Job> {
    return this.http.get<Job>(`/jobs/${jobId}`);
  }


}
