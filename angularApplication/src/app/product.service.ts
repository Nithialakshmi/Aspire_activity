import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  categories: string;
  image: string;
  rating:number;


  images?: string[]; 
  specifications?: string;
  reviews?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  private allProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

 
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching products', error);
        return [];
      })
    );
  }


  
  loadProducts() {
    this.http.get<Product[]>(this.apiUrl)
      .subscribe(products => {
        this.allProducts = products;
        this.productsSubject.next(this.allProducts);
      }, error => {
        console.error('Error loading products', error);
      });
   }




  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }





  filterByCategory(category: string) {
    if (!this.allProducts) {
      console.error('No products available for filtering');
      return;
    }
    let filteredProducts = this.allProducts;
    if (category !== 'All') {
      filteredProducts = this.allProducts.filter(product => product.categories === category);
    }
    this.productsSubject.next(filteredProducts);
  }

  filterByPrice(range: string) {
    if (!this.allProducts || this.allProducts.length === 0 ) {
      console.error('No products available for filtering');
      return;
    }
    let filteredProducts = this.allProducts;

    console.log('Filtering by price range:', range);
    console.log('Available products:', this.allProducts);

    switch (range) {
      case 'less than 100':
        filteredProducts = this.allProducts.filter(product => product.price < 100);
        break;
      case '100-200':
        filteredProducts = this.allProducts.filter(product => product.price >= 100 && product.price <= 200);
        break;
      case '200-500':
        filteredProducts = this.allProducts.filter(product => product.price > 200 && product.price <= 500);
        break;
      case '500-1000':
        filteredProducts = this.allProducts.filter(product => product.price > 500 && product.price <= 1000);
        break;
      case 'greater than 1000':
        filteredProducts = this.allProducts.filter(product => product.price > 1000);
        break;
        default:
          console.error('Unknown price range');
          return;
    }
    console.log('Filtered products:', filteredProducts);
    this.productsSubject.next(filteredProducts);
  }

  sortByPrice(order: 'asc' | 'desc') {
    if (!this.allProducts) {
      console.error('No products available for sorting');
      return;
    }
    const sortedProducts = [...this.allProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    this.productsSubject.next(sortedProducts);
  }
}

