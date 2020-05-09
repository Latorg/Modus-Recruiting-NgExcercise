import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private statusSubject = new BehaviorSubject<boolean>(false);
  currentStatus$  = this.statusSubject.asObservable();

  constructor() { }

  changeStatus( status: boolean ) {
    this.statusSubject.next( status );
  }
}
