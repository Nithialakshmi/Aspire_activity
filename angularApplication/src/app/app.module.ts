import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent} from './product/product.component';

import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductService } from './product.service';
import { UserService } from './user.service';
import { ShoppingCartService } from './shopping-cart.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    ProductComponent,
   
    ShoppingCartComponent,
    CheckoutComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule

    
    
  ],
  providers: [ProductService,UserService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
