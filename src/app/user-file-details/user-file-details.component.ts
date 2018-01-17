import { Component, Input } from '@angular/core';
import { UploadFile } from 'app/event-files/file';
import { FilesServiceService } from 'app/files-service.service';

@Component({
  selector: 'user-file-details',
  templateUrl: './user-file-details.component.html',
  styleUrls: ['./user-file-details.component.scss']
})
export class UserFileDetailsComponent  {
  @Input() upload: UploadFile;

  constructor(private upSvc: FilesServiceService) { }

  deleteUpload() {
    this.upSvc.deleteUpload(this.upload);
  }

}
