import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs/Observable';
import { FilesServiceService } from 'app/files-service.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  uploads: Observable<any[]>;

  constructor(public auth: AuthService, private upSvc: FilesServiceService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUserData(this.auth.currentUserId);
    console.log(this.uploads);
    
  }
  

  logout() {
    this.auth.signOut();
  }

  visibility : boolean = true;
  accountVisibility(){
    this.visibility = !this.visibility;
  }

 
  
}
