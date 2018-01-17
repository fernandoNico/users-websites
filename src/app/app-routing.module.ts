import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

import { CoreModule } from './core/core.module'
import { EventInfoComponent } from 'app/event-info/event-info.component';
import { UserProfileComponent } from 'app/ui/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'signup', component: UserLoginComponent, },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard]},
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'event/:id', component: EventInfoComponent },
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
