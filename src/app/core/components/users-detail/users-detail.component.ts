import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApi } from '../../models/user.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  
  userID: number;
  user: UserApi;
  constructor(  private route: ActivatedRoute,
                private appService: AppService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userID = +params.get('id');
    });
    this.loadUser();
  }

  loadUser() {
    this.appService.getSingleUser(this.userID).subscribe( res => {
      if ( res.data ) {
        this.user = res.data;
      } else {
        this.user = { };
      }
    }, error => {
      this.user = { };
    });
  }

}
