import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 protected  baseURL: string;


  constructor(public httpClient: HttpClient) {
    this.baseURL = `${environment.backend}`;
  }

  protected getAll(endpoint: string) {
    console.log('${this.baseURL}/${endpoint}', `${this.baseURL}/${endpoint}`);

      return this.httpClient.get(`${this.baseURL}/${endpoint}`, {observe: 'body'});
  }

  protected getByParam(endpoint: string, param: string) {
    return this.httpClient.get(`${this.baseURL}/${endpoint}/${param}`, {observe: 'body'});
  }

  protected update(endpoint: string, data) {
    return this.httpClient.put(`${this.baseURL}/${endpoint}`, data);
  }

  protected save(endpoint?: string, data?, observ?) {
    return this.httpClient.post(`${this.baseURL}/${endpoint}`, data, observ);
  }

  protected delete(endpoint: string) {
    return this.httpClient.delete(`${this.baseURL}/${endpoint}`, {responseType: 'text', observe: 'response'});
  }

}
