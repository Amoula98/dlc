import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/_services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Object;

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
      this.appService.getUsers().subscribe(
        (res) => {
          this.users = res;
        },
        (err) => {
          console.log('err');
        }
      );
    }

}
