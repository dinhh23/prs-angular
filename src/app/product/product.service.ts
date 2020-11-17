import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

const baseurl: string ="http://localhost:8080/api/products/"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

// GetAll
list(): Observable<Product[]> {
  return this.http.get(`${baseurl}`) as Observable<Product[]>;
}

// Get by id
get(id: number): Observable<Product> {
  return this.http.get(`${baseurl}${id}`) as Observable<Product>;
}

// Edit 
change(product: Product): Observable<Product> {
  return this.http.put(`${baseurl}${product.id}`, product) as Observable<Product>;
}

// Add
create(product: Product): Observable<Product> {
  return this.http.post(`${baseurl}`, product) as Observable<Product>;
}

// Delete
remove(product: Product): Observable<Product> {
  return this.http.delete(`${baseurl}${product.id}`) as Observable<Product>;
  
}
}
