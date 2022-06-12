import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean | undefined;
  constructor(private _auth: AuthService, private _router: Router) {
    this._auth.isLoggedIn.subscribe((result) => {
      // console.log(
      //   'rsult in const',
      //   result.getIdToken(),
      //   result.getIdTokenResult()
      // );
      this.isLoggedIn = result;
      if (this.isLoggedIn) {
        this._router.navigate(['/template'])
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this._auth.getToken() ? true : false;
    if (this.isLoggedIn) {
      this._router.navigate(['/template'])
    }
  }
  onLogout() {
    console.log('in logout');
    this.isLoggedIn = false;
    localStorage.clear();
    this._router.navigate(['/']);
  }
  viewResume() {
    this._router.navigate(['/resume/view'])
  }

}
