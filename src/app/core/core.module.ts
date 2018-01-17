import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  providers: [AuthService],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class CoreModule { }
