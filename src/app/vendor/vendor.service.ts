import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const baseurl: string ="http://localhost:8080/api/vendors/"

@Injectable({
  providedIn: 'root'
})

export class VendorService {

  constructor(
    private http: HttpClient
  ) { }

  
// GetAll
list(): Observable<Vendor[]> {
  return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
}

// Get by id
get(id: number): Observable<Vendor> {
  return this.http.get(`${baseurl}${id}`) as Observable<Vendor>;
}

// Edit 
change(user: Vendor): Observable<Vendor> {
  return this.http.put(`${baseurl}${user.id}`, user) as Observable<Vendor>;
}

// Add
create(user: Vendor): Observable<Vendor> {
  return this.http.post(`${baseurl}`, user) as Observable<Vendor>;
}

// Delete
remove(user: Vendor): Observable<Vendor> {
  return this.http.delete(`${baseurl}${user.id}`) as Observable<Vendor>;
}

}
