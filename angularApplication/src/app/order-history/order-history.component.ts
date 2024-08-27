



import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../order-history.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orderHistory$!: Observable<any[]>; 

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.loadOrderHistory();
  }



  loadOrderHistory(): void {
    const userId = this.getUserId();
    this.orderHistory$ = this.orderHistoryService.getOrderHistory(userId);
  }
  
  

  getUserId(): number {
    
    return 1; 
  }
}

