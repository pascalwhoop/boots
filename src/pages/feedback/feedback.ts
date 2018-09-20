import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})


export class FeedbackPage {


  constructor(public toast: ToastController, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  submitForm() {
    document.getElementsByTagName("form")[0].submit();
  }


}
