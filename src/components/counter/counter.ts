import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Boot} from "../../model";
import {Observable} from "rxjs";

/**
 * Generated class for the CounterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'counter',
  templateUrl: 'counter.html'
})
export class CounterComponent implements OnChanges{

  text: string;
  @Input()
  boots: Observable<Boot[]>;

  count = 0;

  constructor() {
    console.log('Hello CounterComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['boots'].currentValue.subscribe(res => this.count = res.length);
  }

}
