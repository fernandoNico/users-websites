import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from 'app/event-files/file';
import { FilesServiceService } from 'app/files-service.service';
import { AuthService } from 'app/core/auth.service';


@Component({
  selector: 'upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit  {

  myid:number = 999;
  ngOnInit() {
//  this.myid = this.activatedRoute.snapshot.params['id'];


  }
  selectedFiles: FileList | null;
  currentUpload: UploadFile;
 
  constructor(private upSvc: FilesServiceService,
    private activatedRoute: ActivatedRoute, public auth: AuthService ) { }

  detectFiles($event: Event) {
      this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new UploadFile(file.item(0));
      this.upSvc.pushUpload(this.currentUpload, this.auth.currentUserId);
    } else {
      console.error('No file found!');
    }
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error('No Multi Files found!');
      return;
    }

    Array.from(files).forEach((file) => {
      this.currentUpload = new UploadFile(file);
      this.upSvc.pushUpload(this.currentUpload, this.auth.currentUserId);
    });
  }
}

