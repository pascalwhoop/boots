import {Component} from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Boot} from "../../model";
import {FirebaseAuth} from "@angular/fire";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  boots: Observable<any[]>;
  bootsCol: AngularFirestoreCollection<Boot[]>;
  introRead = false;
  joined = false;
  admin = localStorage.getItem("admin") == "true";

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public auth: AngularFireAuth, public db: AngularFirestore, public navCtrl: NavController) {

    this.bootsCol = db.collection('boots');
    this.boots = this.bootsCol.valueChanges();

    if (localStorage.getItem("introRead")) {
      this.introRead = true;
    }
    if (localStorage.getItem("joined") == "true") {
      this.joined = true;
    }
  }

  loginAdmin() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'password',
          placeholder: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.auth.auth.signInWithEmailAndPassword(data.email, data.password)
              .then(
                credentials => {
                  this.toastCtrl.create({message: "Login completed"}).setDuration(3).present();
                },
                error => {
                  this.toastCtrl.create({message: "Login failed"}).setDuration(3).present();
                })
          }
        }
      ]
    });
    prompt.present();
  }



  ionViewDidLoad() {
    if (!this.introRead) {
      this.navCtrl.parent.select(1);
      localStorage.setItem("introRead", "true");
    }
  }

}
