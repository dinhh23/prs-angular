import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

const baseurl: string ="http://localhost:8080/api/requests/";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  constructor(
    private http: HttpClient
  ) { }

// GetAll
list(): Observable<Request[]> {
  return this.http.get(`${baseurl}`) as Observable<Request[]>;
}

// Get by id
get(id: number): Observable<Request> {
  return this.http.get(`${baseurl}${id}`) as Observable<Request>;
}

// Edit 
change(request: Request): Observable<Request> {
  return this.http.put(`${baseurl}${request.id}`, request) as Observable<Request>;
}

// Add
create(request: Request): Observable<Request> {
  return this.http.post(`${baseurl}`, request) as Observable<Request>;
}

// Delete
remove(request: Request): Observable<Request> {
  return this.http.delete(`${baseurl}${request.id}`) as Observable<Request>;
  
}
}

