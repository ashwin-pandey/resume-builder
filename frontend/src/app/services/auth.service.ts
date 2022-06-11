import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/login', { email, password })
  }
  signUser(email: string, password: string) {
    return this._http.post(this.baseUrl + '/user/signup', { email, password })
  }
}
