import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersDetailComponent } from './users-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersDetailComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersDetailModule { }
