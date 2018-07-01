import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRestaurantsComponent } from './components/admin-restaurants/admin-restaurants.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { OurRestaurantsComponent } from './components/our-restaurants/our-restaurants.component';
import { NewRestaurantComponent } from './components/new-restaurant/new-restaurant.component';

const routes: Routes = [
  {
    path: "restaurants", component: AdminRestaurantsComponent, 
    children: [ 
	  //  {
    //     path: 'our-products',
    //     component: OurProductsComponent
    //   },
    //   {
    //     path: 'our-restaurants',
    //     component: OurRestaurantsComponent
    //   } 
    ]
  },
  {
    path: "orders", component: AdminOrdersComponent
  },
  {
    path: 'restaurants/our-products',
    component: OurProductsComponent
  },
  {
    path: 'restaurants/our-restaurants',
    component: OurRestaurantsComponent
  },
  {
    path: 'restaurants/our-restaurants/new',
    component: NewRestaurantComponent
  },
  {
    path: 'restaurants/our-restaurants/:id',
    component: NewRestaurantComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
