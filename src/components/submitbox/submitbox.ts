import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Boot} from "../../model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {ImageUploadProvider, Upload} from "../../providers/image-upload/image-upload";
import {firebaseConstants} from "../../environment";


/**
 * Generated class for the SubmitboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submitbox',
  templateUrl: 'submitbox.html'
})
export class SubmitboxComponent{

  boot: Boot = new Boot();
  @Input()
  bootsCol: AngularFirestoreCollection<Boot[]>;
  currentUpload: Upload;
  submitted = false;

  constructor(private element: ElementRef, private db: AngularFirestore, private uploadSvc: ImageUploadProvider) {
  }

  submit(boot: Boot) {
    boot.signedDate = new Date().toJSON();
    this.uploadSvc.pushUpload(this.currentUpload, this.boot)
      //when image upload has completed
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url =>{
        boot.imgUrl = url;
        return this.saveFileData(boot)
      })
      //when doc upload has completed
      .then(
        docVal => {
          this.submitted = true;
          localStorage.setItem("joined", "true");
        },
        err => {
          //something on error
        });
  }


  imageChangeListner(event) {
    if (event.target.files && event.target.files[0]) {
      this.currentUpload = new Upload(event.target.files[0])
    }
  }

  // Writes the file details to the realtime db
  private saveFileData(boot: Boot) {
    let doc = JSON.parse(JSON.stringify(boot));
    return this.db.collection(firebaseConstants.bootsCollection).add(doc)
  }
}
