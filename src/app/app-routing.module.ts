import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./appareil-view/appareil-view.module').then(m => m.AppareilViewModule) 
  },
  { path: 'home', component: HomeComponent },
  { path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'blog', 
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  { path: 'users', 
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)},
    { path: 'new-user', 
    loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule)},
  { path: 'appareils',
    canActivate: [AuthGuardService], 
    loadChildren: () => import('./appareil-view/appareil-view.module').then(m => m.AppareilViewModule) },
  { path: 'appareils/:id', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./single-appareil/single-appareil.module').then(m => m.SingleAppareilModule) },  
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
