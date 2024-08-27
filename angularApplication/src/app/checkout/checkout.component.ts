import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service'; // Use the real UserService
import { CheckoutService } from '../checkout.service';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  step = 0;
  cartItems$!: Observable<{ productId: number; productName: string; quantity: number; price: number }[]>;
  total$!: Observable<number>;
  userProfile: any;
  checkoutData: any = { 
    shippingAddress: {
      address: '',
      city: '',
      postalCode: '',
      country: ''
    },
    paymentMethod: { 
      type: '', 
      cardNumber: '', 
      expiryDate: '', 
      cvv: '' 
    }
  };

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private userService: UserService,
    private checkoutService: CheckoutService,
    private orderHistoryService: OrderHistoryService
  ) {}

  ngOnInit(): void {
    this.cartItems$ = this.shoppingCartService.cartItems$;
    this.total$ = this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.price * item.quantity, 0))
    );
    this.loadUserProfile();
    this.loadCheckoutData();
  }

  loadUserProfile(): void {
    const email = this.userService.getCurrentUserEmail();
    if (email) {
      this.userService.getUserProfileByEmail(email).subscribe(profiles => {
        if (profiles.length > 0) {
          this.userProfile = profiles[0];
        }
      });
    }
  }

  loadCheckoutData(): void {
    this.checkoutService.getCheckoutStep(1).subscribe(data => {
      if (data) {
        this.checkoutData = {
          shippingAddress: {
            address: data.shippingAddress?.address || '',
            city: data.shippingAddress?.city || '',
            postalCode: data.shippingAddress?.postalCode || '',
            country: data.shippingAddress?.country || ''
          },
          paymentMethod: {
            type: data.paymentMethod?.type || '',
            cardNumber: data.paymentMethod?.cardNumber || '',
            expiryDate: data.paymentMethod?.expiryDate || '',
            cvv: data.paymentMethod?.cvv || ''
          }
        };
      }
    });
  }

  nextStep(): void {
    if (this.step < 1) {
      this.step++;
      this.saveCheckoutData();
    }
  }

  saveCheckoutData(): void {
    this.checkoutService.updateCheckoutStep(this.step, this.checkoutData).subscribe();
  }

  completePurchase(): void {
    if (this.checkoutData.paymentMethod.type === 'online') {
      if (!this.checkoutData.paymentMethod.cardNumber ||
          !this.checkoutData.paymentMethod.expiryDate ||
          !this.checkoutData.paymentMethod.cvv) {
        alert('Please fill out all payment details.');
        return;
      }
    }
  
    this.cartItems$.pipe(
      map(cartItems => {
        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return {
          items: cartItems,
          total: total,
          shippingAddress: this.checkoutData.shippingAddress,
          paymentMethod: this.checkoutData.paymentMethod
        };
      }),
      switchMap(orderDetails => this.checkoutService.saveOrder(orderDetails))
    ).subscribe(
      () => {
        console.log('Purchase completed with data:', this.checkoutData);
        this.router.navigate(['/home']);
        alert('Purchase Completed');
      },
      (error) => {
        console.error('Error saving order:', error);
        alert('There was an error completing your purchase. Please try again.');
      }
    );
  }

  onSubmit(shippingForm: any): void {
    if (shippingForm.valid) {
      this.completePurchase();
    } else {
      alert("Please complete the form before submitting.");
    }
  }

  ngAfterViewInit(): void {
    console.log(this.checkoutData.shippingAddress);
    console.log(this.checkoutData.paymentMethod);
  }
}















