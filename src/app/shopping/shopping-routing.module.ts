import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingCartComponent } from "./component/shopping-cart/shopping-cart.component";
import { MyOrderComponent } from "./component/my-order/my-order.component";
import { OrderDetailsComponent } from "./component/order-details/order-details.component";


const routes: Routes = [
    { path: "cart", component: ShoppingCartComponent},
    { path: "my-orders", component: MyOrderComponent},
    { path: "order-details", component: OrderDetailsComponent},


];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ShoppingRoutingModule { }