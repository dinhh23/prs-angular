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
change(vendor: Vendor): Observable<Vendor> {
  return this.http.put(`${baseurl}${vendor.id}`, vendor) as Observable<Vendor>;
}

// Add
create(vendor: Vendor): Observable<Vendor> {
  return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
}

// Delete
remove(vendor: Vendor): Observable<Vendor> {
  return this.http.delete(`${baseurl}${vendor.id}`) as Observable<Vendor>;
  
}
}
