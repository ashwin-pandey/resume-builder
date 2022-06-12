import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private _router: Router, private _form: FormServiceService, private _auth: AuthService, private _toaster: ToastrService) { }

  resumes: Array<any> = []
  ngOnInit(): void {
    console.log("view comp");

    this.getAllResume();
  }
  viewResume(templateId: string, resumeId: string) {
    // this._form.setTemplateId(id);
    this._router.navigate([`template/${templateId}/resume/${resumeId}`])
  }
  getAllResume() {
    this._form.getAllResumes(this._auth.getUserId()).subscribe({
      next: (res: any): void => {
        console.log("resss", res);

        this.resumes = res.data
      },
      error: (err) => {
        this._toaster.error('Failed to get resume, Please try again later')
      }
    })
  }
  generateQR(templatId: any, resumeId: any) {
    this._form.generateQR(this._auth.getUserId(), resumeId).subscribe({
      next: (res: any): void => {
        console.log("resss in qr", res);

        this.resumes = res.data;
        if (res) {
          this._router.navigate(['/viewQR']);
          this._auth.setResumeId(resumeId)
        }
      },
      error: (err) => {
        this._toaster.error('Failed to generate resume, Please try again later')
      }
    })
  }
}

