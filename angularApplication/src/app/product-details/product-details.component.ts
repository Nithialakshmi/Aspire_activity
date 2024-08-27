import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService,Product } from '../product.service'; // Assuming you have a ProductService
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../shopping-cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: true,
imports: [CommonModule ],
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  id:number=0;
  isAuthenticated =false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id')!;
      this.productService.getProductById(this.id).subscribe(product => {
       this.product = product;
     });
     this.userService.authenticationStatus.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }
  addToCart(product: any): void {
    if (this.isAuthenticated) { 
      this.shoppingCartService.addToCart({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      });
      alert(`${product.name} has been added to your cart.`);
    } else {
      alert('Please enter the Signup and Login Credentials');
    }
  }

}



