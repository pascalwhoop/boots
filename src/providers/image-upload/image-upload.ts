// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FirebaseListObservable} from "@angular/fire/database-deprecated";
// import {AngularFireDatabase} from "@angular/fire/database";
// import {AngularFireObject} from "@angular/fire/database";
// import {AngularFireStorage} from "@angular/fire/storage";
import * as firebase from 'firebase/app';
import {Boot} from "../../model";
// import {AngularFirestore} from "@angular/fire/firestore";
// import {firebaseConstants} from "../../environment";
/*
  Generated class for the ImageUploadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Upload {

  $key: string;
  file:File;
  name:string;
  url:string;
  progress:number;
  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}

@Injectable()
export class ImageUploadProvider {
  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  constructor( /* private db: AngularFirestore, private storage: AngularFireStorage */ ) { }


  pushUpload(upload: Upload, boot: Boot) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
        upload.progress = -1;
      },
      () => {
        // upload success
        upload.name = upload.file.name;
      }
    );
    return uploadTask;
  }

}
