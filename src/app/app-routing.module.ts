import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestaurantComponent } from "./shopping/component/restaurant/restaurant.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: "../app/core/core.module#CoreModule"
  },
  {
    path: "shopping",
    loadChildren: "../app/shopping/shopping.module#ShoppingModule"
  },
  {
    path: "subscriptions",
    loadChildren: "../app/subscription/subscription.module#SubscriptionModule"
  },
  {
    path: "blog",
    loadChildren: "../app/blog/blog.module#BlogModule"
  },
  {
    path: "admin",
    loadChildren: "../app/admin/admin.module#AdminModule"
  },
  { path: 'restaurants', component: RestaurantComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
