import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListComponent } from './core/components/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users-list',
    loadChildren: () => import('./core/components/users-list/users-list.module').then( m => m.UsersListModule)
  },
  {
    path: 'users-detail/:id',
    loadChildren: () => import('./core/components/users-detail/users-detail.module').then( m => m.UsersDetailModule)
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
