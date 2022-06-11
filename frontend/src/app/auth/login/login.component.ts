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

  email: string = ''
  password: string = ''
  constructor(private _auth: AuthService, private toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this._auth.loginUser(this.email, this.password).subscribe({
      next: (res) => {
        if (res) {
          this.toastr.success("Login Successful!!!")
        }
      },
      error: (error) => {
        this.toastr.error("Login Failed!!!")
      }
    })
  }
  signUpUser() {
    this._auth.signUser(this.email, this.password).subscribe({
      next: (res) => {
        if (res) {
          this._router.navigate(['/template'])
          this.toastr.success("Signup Successful!!!")
        }
      },
      error: (error) => {
        this.toastr.error("Signup Failed!!!")
      }
    })
  }

}
