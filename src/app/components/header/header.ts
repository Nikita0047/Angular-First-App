import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <h1>
      <nav>
        <span routerLink="/">{{ title() }}</span>
        <div>{{ subtitle }}</div>
        <span id = "items" style="float:right" routerLink="/Todos">Todos</span>
      </nav>
    </h1>

  `,
  styles: `
    h1 {
      background-color: #2e4d62ff;
      color: white; 
      text-align: center;
      padding-inline: 15px;
      padding-block: 10px;
      justify-content: center;
      }
      nav div {
        font-size: 10px;
        font-weight: lighter;
        padding-inline:3px;
      }
      #items{
        display:flex;
      justify-content: space-between;
      cursor: pointer;
      margin: auto 5px;
      padding: 5px 10px;
      font-size: 8px;
    }`,
})
    
export class Header {
  title  = signal('First-App In Angular');// data binding example with signal
  subtitle = 'Learning Angular'; // example of property simple data binding
}
