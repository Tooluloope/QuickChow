import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminRestaurantsComponent } from './components/admin-restaurants/admin-restaurants.component';
import { OurRestaurantsComponent } from './components/our-restaurants/our-restaurants.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { SharedModule } from '../shared/shared.module';
import { NewRestaurantComponent } from './components/new-restaurant/new-restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [AdminOrdersComponent, AdminRestaurantsComponent, OurRestaurantsComponent, OurProductsComponent, NewRestaurantComponent]
})
export class AdminModule { }
