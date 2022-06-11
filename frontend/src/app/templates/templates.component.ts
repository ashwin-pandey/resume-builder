import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  selectTemplate(id: any) {
    this._router.navigate(['resume/add'])
  }
  getAllTemplates() {

  }

}
