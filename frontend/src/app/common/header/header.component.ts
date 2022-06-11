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
      this.isLoggedIn = result
      console.log('result in const', result, this.isLoggedIn);
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this._auth.getToken() ? true : false
  }
  onLogout() {
    console.log('in logout');
    this.isLoggedIn = false;
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
