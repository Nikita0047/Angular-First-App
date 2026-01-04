import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h1>
      <nav>{{ title() }}
        <div>{{ subtitle }}</div>
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
      }`,
})
export class Header {
  title  = signal('First-App In Angular');// data binding example with signal
  subtitle = 'Learning Angular'; // example of property simple data binding
}
