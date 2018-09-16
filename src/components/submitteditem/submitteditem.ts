import {Component, Input,} from '@angular/core';
import {Boot} from "../../model";
import {AngularFirestore} from "@angular/fire/firestore";
import {ToastController} from "ionic-angular";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the SubmitteditemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submitteditem',
  templateUrl: 'submitteditem.html'
})
export class SubmitteditemComponent {

  text: string;
  @Input()
  boot: Boot;
  admin: string;
  displayWidth = 900;

  constructor(private sanitizer: DomSanitizer, public toastCtrl: ToastController, private db: AngularFirestore) {
    this.admin = localStorage.getItem("admin");
    this.displayWidth = window.innerWidth;
  }



  imgDivStyle(){
    let url = "https://res.cloudinary.com/dzp67xqe9/image/fetch/c_limit,f_auto,q_auto,w_" + this.displayWidth + "/" + encodeURIComponent(this.boot.imgUrl);
    let style = `background-image: url("${url}")`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  delete(boot: Boot) {
    this.db.collection('boots/').ref.where('imgUrl', '==', boot.imgUrl).get()
      .then(val => {
        return val.docs[0].id;
      })
      .then(id => {
        return this.db.collection('boots/').doc(id).delete();
      })
      .then(() => this.toastCtrl.create({message: 'Delete completed'}).setDuration(3000).present())
  }

}
