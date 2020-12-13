import { Component, OnInit } from '@angular/core';
import { AuthenticationService, ApplicationService } from 'src/app/_services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  flag: boolean;
  users: any[];
  email: any;
  constructor(
    private auth: AuthenticationService,
    readonly router: Router,
    private toastr: ToastrService,
    private appService: ApplicationService
  ) {}

  ngOnInit() {
    this.appService
      .getUsers()
      .toPromise()
      .then((res: any) => {
        this.users = res;
      });
  }
  login() {
    this.users.forEach(item => {
      console.log('ss', item.username == this.name && item.email == this.email);
      if (item.username == this.name && item.email == this.email) {
        this.auth.flag = true;
        this.auth.Obj = item;
        this.flag = true;
        this.router.navigate(['./Profile']);
      } else {
        this.router.navigate(['./dashBoard']);
      }
    });
    if ( this.flag == true) {
      this.router.navigate(['./Profile']);
    } else {
      this.router.navigate(['./dashBoard']);
      this.toastr.error('unAthirized');
    }
  }
}
