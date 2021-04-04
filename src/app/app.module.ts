import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FiltersComponent } from './components/shoppingcart/filters/filters.component';
import { ProductlistComponent } from './components/shoppingcart/productlist/productlist.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartItemComponent } from './components/shoppingcart/cart/cart-item/cart-item.component';
import { ProductitemComponent } from './components/shoppingcart/productlist/productitem/productitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingcartComponent,
    NavComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartItemComponent,
    ProductitemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
