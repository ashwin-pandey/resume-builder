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
import { LoggedInGuard } from './guard/logged-in.guard';
import { ResumeOneComponent } from './templates/resume-one/resume-one.component';
import { ResumeTwoComponent } from './templates/resume-two/resume-two.component';
import { QrModalComponent } from './resume/qr-modal/qr-modal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'template', component: TemplatesComponent, canActivate: [AuthGuard], },
  { path: 'viewQR', component: QrModalComponent, canActivate: [AuthGuard], },
  { path: 'template/62a486be897305fe300ea87f/resume/:resumeId', component: ResumeOneComponent, canActivate: [AuthGuard] },
  { path: 'template/62a4f9a757222187f5d667d4/resume/:resumeId', component: ResumeTwoComponent, canActivate: [AuthGuard] },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'add', component: AddComponent, canActivate: [AuthGuard], },
      // { path: 'edit', component: EditComponent, canActivate: [AuthGuard], },
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
