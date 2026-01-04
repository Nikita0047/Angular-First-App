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
    <!-- Event binding example -->
    <input type="text" (keyup)="keyupHandler($event)"/>
  `,
  styles: ``,
})
export class Home {
myMessage = signal('Welcome to the Home Component');// data passing from home to greeting component(parent to child) using signal
//EventListener example
// method to handle keyup event
keyupHandler(event:KeyboardEvent){
  console.log(`user has pressed ${event.key} key.`);
}
}
