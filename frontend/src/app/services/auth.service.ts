import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: any = '';
  isLoggedIn = new BehaviorSubject<boolean>(false);
  baseUrl: string = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/login', { email, password })
  }
  signUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/signup', { email, password })
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setUserId(userId: string) {
    this.userId = userId;
  }
  getUserId() {
    return this.userId;
  }
}
