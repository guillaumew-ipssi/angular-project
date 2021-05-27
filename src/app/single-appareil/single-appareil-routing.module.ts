import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleAppareilComponent } from './single-appareil.component';


const routes: Routes = [
  {
    path: '',
    component: SingleAppareilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleAppareilRoutingModule { }