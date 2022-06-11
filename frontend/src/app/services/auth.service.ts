import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:4000';
  constructor(private _http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/login', { email, password })
  }
  signUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/signup', { email, password })
  }
}
