import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { BsNavbarComponent } from '../core/component/bs-navbar/bs-navbar.component';
import { FooterComponent } from '../core/component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RestaurantComponent } from '../shopping/component/restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RestaurantService } from './services/restaurant.service';



@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,



  ],
  declarations: [ BsNavbarComponent, FooterComponent, RestaurantComponent],
  exports:[
    MDBBootstrapModule.forRoot().ngModule,
    NavbarModule,
    BsNavbarComponent, FooterComponent,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    RestaurantService,
  ]

})
export class SharedModule { }
