import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddComponent } from './resume/add/add.component';
import { EditComponent } from './resume/edit/edit.component';
import { ViewComponent } from './resume/view/view.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './resume/preview/preview.component';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TemplatesComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    PreviewComponent,
    ResumeComponent
  ],
  imports: [
    ToastrModule.forRoot({
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
