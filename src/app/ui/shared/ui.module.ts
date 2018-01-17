import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavService } from './nav.service';

import { UserLoginComponent } from '../user-login/user-login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { UserFilesComponent } from 'app/user-files/user-files.component';
import { UserFileDetailsComponent } from 'app/user-file-details/user-file-details.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UploadFilesComponent } from 'app/upload-files/upload-files.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    TopNavComponent,
    FooterNavComponent,
    UserFormComponent,
    LandingPageComponent,
    UserFilesComponent,
    UserFileDetailsComponent,UploadFilesComponent
  ],
  exports: [
    TopNavComponent,
    FooterNavComponent,
    UserProfileComponent,
  ]
})
export class UiModule { }
