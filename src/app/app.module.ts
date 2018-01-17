import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


///// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module'

// Feature Modules
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module'
///// End FireStarter


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


//my modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {  ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { EventsService } from 'app/events.service';
import { EventInfoComponent } from './event-info/event-info.component';
import { FilesServiceService } from 'app/files-service.service';
import { FileDetailsComponent } from 'app/file-details/file-details.component';
import { EventFilesComponent } from 'app/event-files/event-files.component';





@NgModule({
  declarations: [
    AppComponent,
    EventInfoComponent,
    EventFilesComponent,
    FileDetailsComponent,

    
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AppRoutingModule,CoreModule,
    SharedModule,ItemModule,UiModule,NotesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCA20_4EESP91_VCovXIqtbMWrRjWnuD8g'
    })
  ],
  providers: [EventsService, FilesServiceService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
