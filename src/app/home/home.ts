import { Component, signal } from '@angular/core';
import{ Greeting } from '../components/greeting/greeting';
import{ Counter } from '../components/counter/counter';
@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  template: `
    <p>
      home works!
    </p>
    <app-greeting [message]="myMessage()"/>
    <app-counter></app-counter>
    <!-- Event binding example -->
    <input
     type="text" 
     (keyup)="keyupHandler($event)"
     placeholder="Type here..."/>
  `,
  styles: `
  input{
    border:2px solid #2e4d62ff;
    margin:10px;
    padding:5px;
    font-size:16px;
    length:500px;
  }
  `,
})
export class Home {
myMessage = signal('Welcome to the Home Component');// data passing from home to greeting component(parent to child) using signal
//EventListener example
// method to handle keyup event
keyupHandler(event:KeyboardEvent){
  console.log(`user has pressed ${event.key} key.`);
}
}
