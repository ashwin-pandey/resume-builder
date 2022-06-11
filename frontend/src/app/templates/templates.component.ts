import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(private _router: Router, private _form: FormServiceService, private _toaster: ToastrService) { }

  templates: Array<any> = []
  ngOnInit(): void {
    this.getAllTemplates();
  }
  selectTemplate(id: any) {
    this._router.navigate(['resume/add'])
  }
  getAllTemplates() {
    this._form.getAllTemplates().subscribe({
      next: (res: any): void => {
        console.log("resss", res);

        this.templates = res.data
      },
      error: (err) => {
        this._toaster.error('Failed to get Templates, Please try again later')
      }
    })
  }

}
