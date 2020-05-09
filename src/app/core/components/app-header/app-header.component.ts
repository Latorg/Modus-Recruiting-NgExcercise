import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor( private subjectService: SubjectService ) {}

  ngOnInit() {
    this.subjectService.currentStatus$.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  login() {
    this.subjectService.changeStatus(true);
  }

  signup() {
    this.subjectService.changeStatus(true);
  }

  logout() {
    this.subjectService.changeStatus(false);
  }
}
