import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LineItem } from './line-item.class';

const baseurl: string ="http://localhost:8080/api/lines/";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor(
    private http: HttpClient
  ) { }

// GetAll
list(): Observable<LineItem[]> {
  return this.http.get(`${baseurl}`) as Observable<LineItem[]>;
}

// Get by id
get(id: number): Observable<LineItem> {
  return this.http.get(`${baseurl}${id}`) as Observable<LineItem>;
}

// Edit 
change(lineitem: LineItem): Observable<LineItem> {
  return this.http.put(`${baseurl}${lineitem.id}`, lineitem) as Observable<LineItem>;
}

// Add
create(lineitem: LineItem): Observable<LineItem> {
  return this.http.post(`${baseurl}`, lineitem) as Observable<LineItem>;
}

// Delete
remove(lineitem: LineItem): Observable<LineItem> {
  return this.http.delete(`${baseurl}${lineitem.id}`) as Observable<LineItem>;
  
}

// Get line items by request id 
linesForReq(id: number): Observable<LineItem[]> {
  return this.http.get(`${baseurl}for-req/${id}`) as Observable<LineItem[]>;
}
}
