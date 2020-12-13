import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  flag: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('flag') != null &&  sessionStorage.getItem('flag') != 'false') {
      this.flag = true;
    } else {
      this.flag = false;
    }
    console.log('f', this.flag);

  }

  routeTo(key) {
      if (key == 'Users') {
         this.router.navigate(['Users']);
      } else if (key == 'Profile') {
        this.router.navigate(['Profile']);

      } else if ( key == 'Posts') {
        this.router.navigate(['Posts']);
      } else {
        this.router.navigate(['Login']);

      }
  }
  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
