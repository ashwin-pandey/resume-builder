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
    this.formService.getResumeById(this.resumeId).subscribe({
      next: (res: any) => {
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.email = res.data.email;
        this.introduction = res.data.introduction;
        this.designation = res.data.designation;
        this.phone = res.data.phone;
        this.skills = res.data.skills;
        this.experience = res.data.experience;
        this.education = res.data.education;
        this.hobbies = res.data.hobbies;
      }
    });

  }

}
