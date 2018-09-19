import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Boot} from "../../model";
import {HOST} from "../../environment";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  policeSampleBoots: Boot[];

  constructor(public navCtrl: NavController) {

    this.policeSampleBoots = [
      {
        imgUrl: `${HOST}/assets/imgs/police1.jpg`,
        nick: "Beispielpolizist 1",
        text: "Ich bin gegen X und denke die Befehle an die Polizei sind nicht rechtens",
        rank: "PMA",
        signedDate: new Date().toJSON()
      },
      {
        imgUrl: `${HOST}/assets/imgs/police3.jpg`,
        nick: "Beispielpolizist 2",
        text: "Ich bin gegen X und denke die Befehle an die Polizei sind nicht rechtens",
        rank: "PMA",
        signedDate: new Date().toJSON()
      },
      {
        imgUrl: `${HOST}/assets/imgs/police2.jpg`,
        nick: "Beispielpolizist 2",
        text: "Ich bin gegen X und denke die Befehle an die Polizei sind nicht rechtens",
        rank: "PMA",
        signedDate: new Date().toJSON()
      }
    ]

  }

}
