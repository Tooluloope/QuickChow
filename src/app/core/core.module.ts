import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from '../core/component/bs-navbar/bs-navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RestaurantCardComponent } from './component/restaurant-card/restaurant-card.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [    
    SharedModule,
    CommonModule,
    CoreRoutingModule

  ],
  declarations: [ HomeComponent, RestaurantCardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    // BsNavbarComponent,
    // FooterComponent,
    RestaurantCardComponent,
    
    
    
  ],
  providers:[
    Title
  ]
})
export class CoreModule { }
