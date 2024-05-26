import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  categoryInput:string="Stationary";

  products:product[]=[{productId:10011,productName:"Laptop",cost:45000,category:"Electronics"},
  {productId:10012,productName:"Pendrive",cost:300,category:"Electronics"},
  {productId:10013,productName:"Mobile",cost:39000,category:"Electronics"},
  {productId:10014,productName:"ThumpsUp",cost:65,category:"Beverages"},
  {productId:10015,productName:"7Up",cost:75,category:"Beverages"},
  {productId:10016,productName:"Charger",cost:150,category:"Electronics"},
  {productId:10017,productName:"Pen",cost:20,category:"Stationary"},
  {productId:10018,productName:"Bag",cost:2000,category:"Stationary"},
  {productId:10019,productName:"PowerBank",cost:3000,category:"Electronics"},
  {productId:10020,productName:"StickFile",cost:50,category:"Stationary"},
  {productId:10021,productName:"Maaza",cost:100,category:"Beverages"}
  ];
}
