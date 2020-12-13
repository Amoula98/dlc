import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  flag: boolean;
  Obj: any;

  constructor(readonly router: Router) {
  }


  logout() {
    this.flag = false;
    this.router.navigate(['./dashBoard']);
  }


}

