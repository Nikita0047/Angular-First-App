import { Component, signal } from '@angular/core';
import{ Greeting } from '../components/greeting/greeting';
@Component({
  selector: 'app-home',
  imports: [Greeting],
  template: `
    <p>
      home works!
    </p>
    <app-greeting [message]="myMessage()"/>
  `,
  styles: ``,
})
export class Home {
myMessage = signal('Welcome to the Home Component');// data passing from home to greeting component(parent to child) using signal
}
