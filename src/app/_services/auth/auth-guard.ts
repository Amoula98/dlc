import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '..';

@Injectable()
export class AuthGuard implements CanActivate {
  flag: boolean;

  constructor(private readonly router: Router, private readonly authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  ) {
    console.log('Auth', this.authenticationService.flag);
    if (this.authenticationService.flag) {
        this.flag = true;
        sessionStorage.setItem('flag', 'true');
    } else  if (this.authenticationService.flag == undefined) {
      this.flag = false;
      this.router.navigate(['./dashBoard']);
      sessionStorage.clear();
    } else {
      this.router.navigate(['./dashBoard']);
      this.flag = false;
      sessionStorage.clear();
    }
    return this.flag;
  }


}
