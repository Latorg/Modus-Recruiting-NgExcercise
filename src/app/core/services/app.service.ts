import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import tasks, { Task } from "../tasks/tasks";
import { HttpClient } from '@angular/common/http';
import { ListUserResponse, SingleUserResponse } from '../models/user.model';

@Injectable()
export class AppService {
  constructor(  private sanitizer: DomSanitizer,
                private http: HttpClient ) {}

  getTasks(): Array<Task> {
    return tasks.map(task => {
      const updatedTask: Task = { description: "" };
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace(
            "{{link}}",
            `<a href='${link}'>${link}</a>`
          );
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace(
            "{{link}}",
            `<a href='/${link}' routerLink="${link}">${link} route</a>`
          );
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(
        updatedTask.description
      ) as string;
      return Object.assign({}, task, updatedTask);
    });
  }

  getUsersList() {
    return this.http.get<ListUserResponse>('https://reqres.in/api/users?page=1&per_page=12');
  }
  
  getSingleUser(userId: number) {
    return this.http.get<SingleUserResponse>('https://reqres.in/api/users/' + userId);
  }

  
}
