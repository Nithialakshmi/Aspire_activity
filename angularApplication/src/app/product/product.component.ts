




import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule,Route, ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  // productId: number | null = null;

  categories = ['All', 'Cleaning items', 'Fruits and Vegetables', 'Snacks', 'Masalas', 'Spices', 'Dairy', 'Pulses'];
  priceRanges = ['less than 100', '100-200', '200-500', '500-1000', 'greater than 1000'];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.productService.products$.subscribe(products => this.products = products);     
  }

  filterByCategory(category: string): void {
    this.productService.filterByCategory(category);
  }

  filterByPrice(range: string): void {
    this.productService.filterByPrice(range);
  }




 

  viewProductDetails(id: number): void {
    
    this.router.navigate(['/product-details']);
  }
  

}

