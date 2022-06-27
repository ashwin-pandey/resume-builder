import { FormServiceService } from './../../services/form-service.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { QRCodeComponent } from 'angular2-qrcode';

@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.css']
})
export class QrModalComponent implements OnInit {
  resumeId: any = '';
  qrData: any = '';
  naturalWidth: any;
  naturalHeight: any
  @ViewChild('qrcode', { read: ElementRef }) private qrcode!: ElementRef;
  constructor(private _auth: AuthService, private _form: FormServiceService, private _toaster: ToastrService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.resumeId = this._auth.getResumeId();
    this._form.getQRLink(this.resumeId).subscribe({
      next: (res: any): void => {
        console.log("resss in qr link", res);

        if (res) {
          this.qrData = res.data;
        }
      },
      error: (err) => {
        this._toaster.error('Failed to generate resume, Please try again later')
      }

    })
  }
  download() {
    const fileNameToDownload = 'resume_qrcode';
    const base64Img = this.qrcode?.nativeElement?.children[0]?.src;
    fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {
        // IE
        // if (window.navigator && window.navigator['msSaveOrOpenBlob']){
        //   //  window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
        // } 
        // if { // Chrome
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileNameToDownload;
        link.click();
        // }
      })
  }
}
