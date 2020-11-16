import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl: string = "http://localhost:8080/api/users/"

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }

// GetAll
list(): Observable<User[]> {
  return this.http.get(`${baseurl}`) as Observable<User[]>;
}

// Get by id
get(id: number): Observable<User> {
  return this.http.get(`${baseurl}${id}`) as Observable<User>;
}

// Edit 
change(user: User): Observable<User> {
  return this.http.put(`${baseurl}${user.id}`, user) as Observable<User>;
}

// Add
create(user: User): Observable<User> {
  return this.http.post(`${baseurl}`, user) as Observable<User>;
}

// Delete
remove(user: User): Observable<User> {
  return this.http.delete(`${baseurl}${user.id}`) as Observable<User>;
}
}