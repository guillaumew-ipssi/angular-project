import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppareilViewComponent } from './appareil-view.component';


const routes: Routes = [
  {
    path: '',
    component: AppareilViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppareilViewRoutingModule { }