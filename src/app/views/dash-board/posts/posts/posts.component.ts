import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/_services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Object;
  users: any[];
  postsById: any[];
  name;
  myClonedArray: any;
  cloneOfPosts: any[] & Object;
  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }
  getPosts(): any {
    this.appService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => {
        console.log('err');
      }
    );
  }
  getUsers() {
    this.appService.getUsers().subscribe(
      (res: any) => {
        this.users = res;
        this.myClonedArray  = JSON.parse(JSON.stringify(this.users));
      },
      (err) => {
        console.log('err');
      }
    );
  }
  getPostsByuserId(id) {
    this.appService.getPostsByUserId(id).subscribe(
      (res: any) => {
        this.postsById = res;
        this.cloneOfPosts = Object.assign([], this.postsById);
      }
    );
  }
  getUser(value: string) {
    if (value != '') {
    const res = this.users.filter(
      (item) => {
        if (item.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())) {
          return item;
        }
      }
      );
      this.users = res;
    } else {
      this.users = this.myClonedArray;
    }
  }
  getPost(value: string) {
    console.log('d', value);

    if (value != '') {
    const res = this.postsById.filter(
      (item) => {
        if (item.title.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())) {
          return item;
        }
      }
      );
      this.postsById = res;
    } else {
      this.postsById = this.cloneOfPosts;
    }
  }
}
