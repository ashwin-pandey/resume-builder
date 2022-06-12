import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  baseUrl: string = environment.baseUrl;
  templateId: string = '';
  constructor(private _http: HttpClient) { }

  getAllResumes() {
    return this._http.get(this.baseUrl + `/resume`);
  }

  getResumeById(resumeId: string) {
    return this._http.get(this.baseUrl + `/resume/${resumeId}`);
  }

  createResume(templateId: string, resume: any, userId: string) {
    const body = { resume, templateId, userId };
    return this._http.post(this.baseUrl + `/resume`, body);
  }

  updateResumeById(resumeId: string, resume: any) {
    const body = { resume };
    return this._http.put(this.baseUrl + `/resume/${resumeId}`, body);
  }

  getAllTemplates() {
    return this._http.get(this.baseUrl + `/template`);
  }
  getTemplateId() {
    return this.templateId;
  }

  setTemplateId(templateId: string) {
    this.templateId = templateId;
  }


}
