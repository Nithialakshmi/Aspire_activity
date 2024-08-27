import { Component,OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForOf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, NgForOf, AsyncPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  cartItems$!: Observable<{ productId: number; productName: string; quantity: number; price: number }[]>;
  total$!: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService ,private router:Router) {}

  ngOnInit(): void {
    this.cartItems$ = this.shoppingCartService.cartItems$;
    this.total$ = this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.price * item.quantity, 0))
    );
  }

  removeFromCart(productId: number) {
    this.shoppingCartService.removeFromCart(productId);
  }

  

  updateQuantity(productId: number, quantity: string) {
    const quantityNumber = parseInt(quantity, 10);
    if (!isNaN(quantityNumber)   && quantityNumber >= 1 ) {
      this.shoppingCartService.updateQuantity(productId, quantityNumber);
    } else {
      const previousItem = this.shoppingCartService.getCartItemById(productId);
      const previousQuantity = previousItem ? previousItem.quantity : 1;
      this.shoppingCartService.updateQuantity(productId, previousQuantity);
    }
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}