import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BloglistComponent } from './component/bloglist/bloglist.component';
import { SharedModule } from '../shared/shared.module';
import { BlogpostComponent } from './component/blogpost/blogpost.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [BloglistComponent, BlogpostComponent]
})
export class BlogModule { }
