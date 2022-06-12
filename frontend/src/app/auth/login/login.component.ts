import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignIn: boolean = false;
  email: string = ''
  password: string = ''
  name: string = ''
  phone: string = ''
  activeForm: string = 'login';
  isLoggedIn: boolean | undefined;

  constructor(private _auth: AuthService, private toastr: ToastrService, private _router: Router, private _loaderService: LoaderService) {
    this._auth.isLoggedIn.subscribe((result) => {
      console.log(
        'rsult in const', result
      );
      this.isLoggedIn = result;
      if (this.isLoggedIn) {
        this._router.navigate(['/'])
      }
    });

  }
  ngOnInit(): void {
    this._auth.isLoggedIn.subscribe((result) => {
      // console.log(
      //   'rsult in const',
      //   result.getIdToken(),
      //   result.getIdTokenResult()
      // );
      this.isLoggedIn = result;
      if (this.isLoggedIn) {
        this._router.navigate(['/'])
      }
    });
  }
  onSelectSignIn() {
    this.isSignIn = true
  }
  onSelectLogin() {
    this.isSignIn = false
  }
  loginUser() {
    this._auth.loginUser(this.email, this.password).subscribe({
      next: (res: any) => {
        if (res) {
          this._auth.isLoggedIn.next(true);
          this._router.navigate(['/template'])
          this.toastr.success("Login Successful!!!");
          this._auth.setToken(res.token);
        }
      },
      error: (error) => {
        this.toastr.error("Login Failed!!!")
      }
    })
  }
  signUpUser() {
    this._auth.signUser(this.email, this.password).subscribe({
      next: (res: any) => {
        if (res) {
          this._auth.isLoggedIn.next(true);
          this._auth.setToken(res.token);
          this.toastr.success("Signup Successful!!!");
          this._router.navigate(['/template'])
        }
      },
      error: (error) => {
        this.toastr.error("Signup Failed!!!")
      }
    })
  }

}
