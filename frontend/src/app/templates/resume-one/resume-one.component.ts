import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resume } from 'src/app/models/resume.model';
import { Skills } from 'src/app/models/skills.model';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-resume-one',
  templateUrl: './resume-one.component.html',
  styleUrls: ['./resume-one.component.css']
})
export class ResumeOneComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formService: FormServiceService) { }

  resumeId: any = '';
  resume: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  introduction: string = '';
  designation: string = '';
  phone: string = '';
  city: string = '';
  state: string = '';
  skills: any;
  experience: any;
  education: any;
  hobbies: any;


  ngOnInit(): void {
    this.resumeId = this.route.snapshot.paramMap.get('resumeId');
    this.getResumeDetails();
    this.firstName = this.resume.firstName;
    this.lastName = this.resume.lastName;
    this.email = this.resume.email;
    this.introduction = this.resume.introduction;
    this.designation = this.resume.designation;
    this.phone = this.resume.phone;
    this.skills = this.resume.skills;
    this.experience = this.resume.experience;
    this.education = this.resume.education;
    this.hobbies = this.resume.hobbies;
  }

  getResumeDetails() {
    this.formService.getResumeById(this.resumeId).subscribe({
      next: (res) => {
        this.resume = res;
      }
    });
  }

}
