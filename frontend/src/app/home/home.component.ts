import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

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

}
