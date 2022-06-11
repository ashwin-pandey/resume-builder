import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddComponent } from './resume/add/add.component';
import { EditComponent } from './resume/edit/edit.component';
import { ViewComponent } from './resume/view/view.component';
import { ResumeComponent } from './resume/resume.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'template', component: TemplatesComponent, canActivate: [AuthGuard], },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'add', component: AddComponent, canActivate: [AuthGuard], },
      { path: 'edit', component: EditComponent, canActivate: [AuthGuard], },
      { path: 'view', component: ViewComponent, canActivate: [AuthGuard], }
    ]
  },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
