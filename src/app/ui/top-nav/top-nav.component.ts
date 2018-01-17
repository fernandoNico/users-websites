import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs/Observable';
import { FilesServiceService } from 'app/files-service.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  uploads: Observable<any[]>;;

  title = 'MyEvent';

  constructor(public auth: AuthService, private upSvc: FilesServiceService) { }

  // toggleCollapse() {
  //   this.show = !this.show
  // }
  ngOnInit() {
    this.uploads = this.upSvc.getUserData(this.auth.currentUserId);
    console.log(this.uploads);
    
  }

  logout() {
    this.auth.signOut();
  }

}
