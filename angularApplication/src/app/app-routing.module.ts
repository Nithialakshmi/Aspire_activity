import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent }, 
  { path: 'cart', component: ShoppingCartComponent, canActivate:[AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard] }, 
  {path:'product',component:ProductComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'order-history',component:OrderHistoryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
