import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule
  ],
  declarations: [ShoppingCartComponent, MyOrderComponent, OrderDetailsComponent]
})
export class ShoppingModule { }
