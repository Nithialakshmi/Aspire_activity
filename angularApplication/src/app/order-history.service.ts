import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrderHistory(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  saveOrderHistory(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

}

