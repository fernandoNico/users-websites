import { Component, Input } from '@angular/core';
import { UploadFile } from 'app/event-files/file';
import { FilesServiceService } from 'app/files-service.service';
@Component({
  selector: 'files-detail',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent {

@Input() upload: UploadFile;

constructor(private upSvc: FilesServiceService) { }
 
}