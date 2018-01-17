import { Component, OnInit } from '@angular/core';
import { FilesServiceService } from 'app/files-service.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from 'app/event-files/file';
import { AuthService } from 'app/core/auth.service';

@Component({
    selector: 'user-files',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.scss']
})
export class UserFilesComponent implements OnInit {
  uploads: Observable<UploadFile[]>;

  constructor(private upSvc: FilesServiceService,   private activatedRoute: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    // var  eventId: number = this.activatedRoute.snapshot.params['id'];
         this.uploads = this.upSvc.getUserUploads(this.auth.currentUserId);
         console.log(this.uploads)
        //  this.uploads.subscribe(() => this.showSpinner = false);
  }

}