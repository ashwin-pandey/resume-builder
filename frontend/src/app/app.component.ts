import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume-Builder';
  isLoading: boolean = false;
  constructor(private _loader: LoaderService) {
    this._loader.sendLoading.subscribe(async (res) => {
      console.log('value in laoder', res);

      this.isLoading = await res;
    });
  }
}
