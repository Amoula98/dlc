import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService, ApplicationService } from 'src/app/_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  flag: string;
  user: any;
  postsById: any[];
  todos: any;

  constructor(private router: Router, private toastr: ToastrService, private auth: AuthenticationService,
     private appService: ApplicationService) { }

  ngOnInit() {
    this.canSee();
    console.log('dddddddd', this.auth.Obj);
      this.user = this.auth.Obj;
      this.getPostsByuserId(this.user.id);
      this.getTodos(this.user.id);
  }
  getTodos(id) {
    this.appService.getTodosByUserId(id).subscribe(
      (res: any) => {
        this.todos = res;
      }
    );
  }
  getPostsByuserId(id) {
    this.appService.getPostsByUserId(id).subscribe(
      (res: any) => {
        this.postsById = res;
      }
    );
  }
  canSee () {
    console.log('sssssssss');
   this.flag = sessionStorage.getItem('flag');
   if (this.flag == 'true') {
      this.router.navigate(['./Profile']);
   } else {
    this.router.navigate(['./dashBoard']);
    this.toastr.error('unAthirized');
   }
  }
  putTodo(todo, i) {
    todo.completed = true;
   this.appService.putTodosByUserId(todo.id, todo).subscribe(
     (res) => {
       console.log('wqttwt', res);
      }
   );
  }
}
