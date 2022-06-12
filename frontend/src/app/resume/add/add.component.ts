import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { Skills } from 'src/app/models/skills.model';
import { Resume } from 'src/app/models/resume.model';
import { FormServiceService } from 'src/app/services/form-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formService: FormServiceService, 
    private authService: AuthService,
    private router: Router) { }

  // Personal Details
  firstName: any = '';
  lastName: any = '';
  email: any = '';
  designation: any = ''; 
  phone: any = '';
  city: any = '';
  state: any = '';
  introduction: any = '';

  // Skills
  skills: Skills[] = [];
  skillInput: any = '';

  // Hobby
  hobbies: any[] = [];
  hobby: any = '';

  // Experience
  workExperience: Experience[] = [];
  companyName: any = '';
  companyDesignation: any = '';
  companyDescription: any = '';
  companyFromDate: any = '';
  companyToDate: any = '';

  // Education
  education: Education[] = [];
  institutionName: any = '';
  institutionDegree: any = '';
  institutionStartDate: any = '';
  institutionEndDate: any = '';
  institutionScore: any = '';


  ngOnInit(): void {
    
  }

  addSkill() {
    this.skills.push(this.skillInput);
    console.log(this.skills)
    // reset
    this.skillInput = '';
  }

  addCompany() {
    let experience: Experience = {
      company: this.companyName,
      description: this.companyDescription,
      designation: this.companyDesignation,
      from: this.companyFromDate,
      to: this.companyToDate
    };

    // add work experience into the array
    this.workExperience.push(experience);
    
    console.log(this.workExperience);

    // reset
    this.companyName = '';
    this.companyDesignation = '';
    this.companyDescription = '';
    this.companyFromDate = '';
    this.companyToDate = '';
  }

  addEducation() {
    let education: Education = {
      college: this.institutionName,
      degree: this.institutionDegree,
      from: this.institutionStartDate,
      to: this.institutionEndDate,
      score: this.institutionScore
    };
    
    this.education.push(education);

    console.log(this.education);

    // reset
    this.institutionName = '';
    this.institutionDegree = '';
    this.institutionStartDate = '';
    this.institutionEndDate = '';
    this.institutionScore = '';
  }

  addHobbies() {
    this.hobbies.push(this.hobby);
    console.log(this.hobbies);
    this.hobby = '';
  }

  saveDetails() {
    let resume: Resume = {
      firstName: this.firstName,
      lastName: this.lastName,
      designation: this.designation,
      email: this.email,
      city: this.city,
      state: this.state,
      education: this.education,
      experience: this.workExperience,
      phone: this.phone,
      skills: this.skills,
      hobbies: this.hobbies,
      introduction: this.introduction
    };

    console.log(resume);
    let templateId = this.formService.getTemplateId();
    let userId = this.authService.getUserId();
    
    let resumeId;
    this.formService.createResume(templateId, resume, userId).subscribe({
      next: (response: any) => {
        resumeId = response.createdResponse._id
        this.router.navigate([`template/${templateId}/resume/${resumeId}`]);
      }
    });

  }

}
