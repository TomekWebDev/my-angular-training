import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  stringInterpolation = 1;

  eventBindingVar = 'nessun valore';

  twoWayBindingVar = 'valore iniziale';

  myOnInput(event: Event) {
    this.eventBindingVar = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  myOnClick(event: Event) {
    this.eventBindingVar = 'nessun valore';
  }

  myOnInputTwoWay(event: Event) {
    this.twoWayBindingVar = (<HTMLInputElement>event.target).value;
  }

  myOnClickTwoWay(event: Event) {
    this.twoWayBindingVar = 'valore di reset';
  }
}
