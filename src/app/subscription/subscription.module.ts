import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionComponent } from './component/subscription/subscription.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubscriptionRoutingModule
  ],
  declarations: [ SubscriptionComponent]
})
export class SubscriptionModule { }
