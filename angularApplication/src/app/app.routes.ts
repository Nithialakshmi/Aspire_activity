import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent

    },

    {
        path:"home",
        component:HomeComponent

    },
    
    {
        path:"contact",
        component:ContactComponent

    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path: "product-details",
        component:ProductDetailsComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"cart",
        component:ShoppingCartComponent
    },
    {
        path:"checkout",
        component:CheckoutComponent
    },
    {
        path:"order-history",
        component:OrderHistoryComponent 

    },

 



];

