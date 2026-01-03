import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h1>
      <nav>First App In Angular</nav>
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
      }`,
})
export class Header {

}
