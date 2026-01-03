import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import{ Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header ,Home], 
  template: `
    <app-header></app-header>
    <main>
    <app-home/>
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
export class App {
  protected readonly title = signal('First-App');
}
