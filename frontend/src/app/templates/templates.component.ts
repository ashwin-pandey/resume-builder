import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(private _router: Router, private formService: FormServiceService) { }

  ngOnInit(): void {
  }
  selectTemplate(id: any) {
    this.formService.setTemplateId(id);
    this._router.navigate(['resume/add'])
  }
  getAllTemplates() {

  }

}
