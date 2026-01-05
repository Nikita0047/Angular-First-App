import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header], 
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
   
    
  `,
  styles: [
    `
    p{
      font-size: 20px;
      background-color: #e83b3bff;
    }
    `
  ],
})
//Hey there! This is the main app component
export class App {
  protected readonly title = signal('First-App');
}
