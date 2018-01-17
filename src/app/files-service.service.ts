import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { UploadFile } from 'app/event-files/file';
import { ActivatedRoute } from '@angular/router/src/router_state';


@Injectable()
export class FilesServiceService {
  basePathusersData = 'users';
  basePath = 'uploads';
  basePathusers = 'user-uploads';
  uploadsRef: AngularFireList<UploadFile>;
  uploads: Observable<UploadFile[]>;
  userData: Observable<any[]>;

  constructor(private db: AngularFireDatabase ) { }

  getUserData(uid: string) {
    this.userData = this.db.list(this.basePathusersData, ref=> ref.orderByChild('uid').equalTo(uid)).snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.val();
        const $key = a.payload.key;
        return { $key, ...data };
      });
    });
    return this.userData;
  }

  getUploads(id: string) {
    this.uploads = this.db.list(this.basePath, ref=> ref.orderByChild('id').equalTo(id)).snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.val();
        const $key = a.payload.key;
        return { $key, ...data };
      });
    });
    return this.uploads;
  }

  getUserUploads(id: string) {
    this.uploads = this.db.list(this.basePathusers, ref=> ref.orderByChild('id').equalTo(id)).snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.val();
        const $key = a.payload.key;
        return { $key, ...data };
      });
    });
    return this.uploads;
  }





  deleteUpload(upload: UploadFile) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name);
    })
    .catch((error) => console.log(error));
  }

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload(upload: UploadFile, eventid: any) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePathusers}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) =>  {
        // upload in progress
        const snap = snapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          upload.id = eventid;
          this.saveFileData(upload);
          return;
        } else {
          console.error('No download URL!');
        }
      },
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: UploadFile) {
    this.db.list(`${this.basePathusers}/`).push(upload);
  }

  // Writes the file details to the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePathusers}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePathusers}/${name}`).delete()
  }
}
