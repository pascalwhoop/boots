import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

/**
 * Generated class for the SubmittedlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submittedlist',
  templateUrl: 'submittedlist.html',
  // host: {
  //   'style': 'background:red;display:block;'
  // }
})
export class SubmittedlistComponent {

  boots: Observable<any[]>;

  constructor(public db: AngularFirestore) {

    this.boots = db.collection('boots').valueChanges();
  }

}
