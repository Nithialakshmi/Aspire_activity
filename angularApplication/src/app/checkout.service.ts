import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutStepsUrl = 'http://localhost:3000/checkoutSteps';
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getCheckoutStep(step: number): Observable<any> {
    return this.http.get<any[]>(this.checkoutStepsUrl).pipe(
      map(steps => steps.find(s => s.step === step)?.data || {})
    );
  }
  updateCheckoutStep(step: number, data: any): Observable<any> {
    return this.http.put(`${this.checkoutStepsUrl}/${step}`, { step, data });
  }

  saveOrder(order: any): Observable<any> {
    return this.http.post(this.ordersUrl, order);
  }
}



