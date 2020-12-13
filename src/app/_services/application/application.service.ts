import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService {

  getPosts() {
    return this.getAll('posts');
  }
  getUsers() {
    return this.getAll('users');
  }
  getPostById(id) {
    return this.getByParam('posts', id);
  }
  getUserById(id) {
    return this.getByParam('users', id);
  }
  getPostsByUserId(id) {
    return this.getAll(`posts?userId=${id}`);
  }
  getTodosByUserId(id) {
    return this.getAll(`todos?userId=${id}`);
  }
  putTodosByUserId(id, data) {
    return this.update(`todos/${id}`, data);
  }
}
