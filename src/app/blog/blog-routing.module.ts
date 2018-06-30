import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './component/bloglist/bloglist.component';
import { BlogpostComponent } from './component/blogpost/blogpost.component';

const routes: Routes = [
  {
    path: "", component: BloglistComponent
  },
  {
    path: "post", component: BlogpostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
