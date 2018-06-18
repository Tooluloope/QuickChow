import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from '../core/component/bs-navbar/bs-navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  imports: [    
    MDBBootstrapModule.forRoot(),
    CommonModule,

  ],
  declarations: [BsNavbarComponent, FooterComponent, HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    BsNavbarComponent,
    FooterComponent,
    MDBBootstrapModule.forRoot().ngModule,
    
  ]
})
export class CoreModule { }
