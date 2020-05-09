import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppService } from './services/app.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppHeaderComponent, AppContentComponent, UsersListComponent, UsersDetailComponent],
  exports: [AppHeaderComponent, AppContentComponent, UsersListComponent],
  providers: [AppService]
})
export class CoreModule {}
