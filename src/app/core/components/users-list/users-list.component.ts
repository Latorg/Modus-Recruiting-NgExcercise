import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';
import { UserApi } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor( private appService: AppService ) { }

  users: UserApi[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.appService.getUsersList().subscribe( res => {
      if ( res.data.length > 0 ) {
        this.users.push(...res.data);
      }
    });
  }

}
