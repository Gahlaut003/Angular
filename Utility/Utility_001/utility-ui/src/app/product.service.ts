import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}