import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', 
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  { path: 'appareils', 
    loadChildren: () => import('./appareil-view/appareil-view.module').then(m => m.AppareilViewModule) },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
