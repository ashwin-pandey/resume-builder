import { FormServiceService } from './../../services/form-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.css']
})
export class QrModalComponent implements OnInit {
  resumeId: any = '';
  qrData: any = '';
  constructor(private _auth: AuthService, private _form: FormServiceService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.resumeId = this._auth.getResumeId();
    this._form.getQRLink(this.resumeId).subscribe({
      next: (res: any): void => {
        console.log("resss in qr link", res);

        if (res) {
          this.qrData = res.data
        }
      },
      error: (err) => {
        this._toaster.error('Failed to generate resume, Please try again later')
      }

    })
  }
}
