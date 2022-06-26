import { FormServiceService } from './../../services/form-service.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  naturalWidth: any;
  naturalHeight: any
  @ViewChild('canvas', { static: true }) canvas: any;
  @ViewChild('qrcode', { static: true }) qrcode: ElementRef<HTMLElement> | undefined;
  image: any;
  anchor: any;
  constructor(private _auth: AuthService, private _form: FormServiceService, private _toaster: ToastrService, private renderer: Renderer2,) { }

  ngOnInit(): void {
    this.resumeId = this._auth.getResumeId();
    this._form.getQRLink(this.resumeId).subscribe({
      next: (res: any): void => {
        console.log("resss in qr link", res);

        if (res) {
          this.qrData = res.data;
          this.capture()
        }
      },
      error: (err) => {
        this._toaster.error('Failed to generate resume, Please try again later')
      }

    })
  }
  // Capturing Image
  capture() {
    console.log("qr code", this.canvas?.nativeElement.children);

    let canvas: any = this.canvas?.nativeElement;
    console.log("qr code canvas ", canvas);

    const image = canvas.toDataURL()// Using optional size for image

    console.log("image", image);
    let a = document.createElement('a');
    a.href = image;
    a.download = 'resume.png';
    this.anchor = a;
  }
  download() {
    if (this.anchor)
      this.anchor.click()
  }



  convertCanvastoFile(dataURL: any) {
    let blobBin = atob(dataURL.split(',')[1]);
    let array = [];
    for (let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    let file = new Blob([new Uint8Array(array)], { type: 'image/png' });
    return file;
  }
}
