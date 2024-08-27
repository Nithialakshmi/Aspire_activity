import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItems: { productId: number; productName: string; quantity: number; price: number }[] = [];
  private cartItemsSubject = new BehaviorSubject<{ productId: number; productName: string; quantity: number; price: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: { productId: number; productName: string; quantity: number; price: number }) {
    const existingItem = this.cartItems.find(i => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartItemsSubject.next(this.cartItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(i => i.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItemById(productId: number) {
    return this.cartItems.find(item => item.productId === productId);
  }


  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
