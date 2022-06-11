import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  skills: any[] = [];
  hobbies: any[] = [];

  skillInput: any = '';
  hobby: any = '';

  ngOnInit(): void {
    
  }

  addSkill() {
    let o = { id: Date.now(), name: this.skillInput };
    this.skills.push(o);
    this.skillInput = '';
    // console.log(this.skills);
  }

  addCompany() {

  }

  addEducation() {

  }

  addHobbies() {
    this.hobbies.push(this.hobby);
    this.hobby = '';
  }

}
