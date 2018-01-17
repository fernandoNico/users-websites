import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from 'app/event-files/file';
import { FilesServiceService } from 'app/files-service.service';

@Component({
  selector: 'eventfiles',
  templateUrl: './event-files.component.html',
  styleUrls: ['./event-files.component.scss']
})
export class EventFilesComponent implements OnInit {
  uploads: Observable<UploadFile[]>;

  constructor(private upSvc: FilesServiceService,   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var  eventId: number = this.activatedRoute.snapshot.params['id'];
         this.uploads = this.upSvc.getUploads(eventId.toString());
        //  this.uploads.subscribe(() => this.showSpinner = false);
  }

}
